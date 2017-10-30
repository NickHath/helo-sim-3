require('dotenv').config();

// dependencies
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0strategy = require('passport-auth0');
    

// controllers
const authController = require('./controllers/auth_controller');
const friendController = require('./controllers/friend_controller');
const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

// auth endponts
app.get('/api/auth/login', authController.loginUser);
app.get('/api/auth/setUser', authController.setUser);
app.get('/api/auth/authenticated', authController.authenticateUser);
app.post('/api/auth/logout', authController.logoutUser);

//friend endpoints
app.get('/api/friend/list', friendController.listFriend);
app.post('/api/friend/add', friendController.addFriend);
app.post('/api/friend/remove', friendController.removeFriend);

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

//passport intialized
app.use(passport.initialize());
app.use(passport.session());


// auth0 strategy 
passport.use(new Auth0strategy({
  domain: process.env.AUTH_DOMAIN,
  clientID: process.env.AUTH_CLIENT_ID,
  clientSecret: process.env.AUTH_CLIENT_SECRET,
  callbackURL: process.env.AUTH_CALLBACK
},  function(accessToken, refreshToken, extraParams, profile, done){
  const db = app.get('db');
  const userData = profile._json;
  db.find_session_user([userData.identities[0].user_id]).then( user => {
    if(user[0]){
      return done(null, user[0].id)
    } else {
        db.creat_user([
          userData.name,
          userData.email,
          userData.picture,
          userData.identities[0].user_id
        ]).then( user => {
          return done(null, user[0].id)
        })
    }
  })
}))
passport.serializeUser( function(id, done) {
  done(null, id);
})
passport.deserializeUser( function(id, done) {
  app.get('db').find_session_user(id).then(user => {
    done(null, user[0]);
  })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http:/localhost:3000/',
  failureRedirect: '/auth/login'
})) 
app.get("/auth/me", (req, res)=> {
  if(req.user){
    return res.status(200).send(req.user);
  }
  else {
    return res.status(401).send('Need to login')
  }
})
app.get('/auth/logout', (req, res)=> {
  req.logOut();
  return res.status(308, 'http://localhost:3000')
})





const PORT = 4200;
app.listen(PORT, console.log(`Listening on port ${PORT}`));


// CONNECTION_STRING=postgres://okykkqcjadxkzl:8f8a8e5e7cdb1b2056a2a01dd703e4ee8d1b18731e7f7fcfaceb3b597a06a8f3@ec2-54-83-26-65.compute-1.amazonaws.com:5432/d89klkdc1dgl72?ssl=true