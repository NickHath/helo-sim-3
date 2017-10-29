require('dotenv').config();

// dependencies
const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session');

// controllers
const authController = require('./controllers/auth_controller');

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

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

const PORT = 4200;
app.listen(PORT, console.log(`Listening on port ${PORT}`));