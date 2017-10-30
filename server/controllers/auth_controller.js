module.exports = {
  loginUser: function (req, res) {
    passport.authenticate('auth0',
      { successRedirect: '/api/auth/setUser', failureRedirect: '/api/auth/login' }
    )
      .then(() => res.status(200).send('Success'))
      .catch((err) => res.status(403).send(err))
  },



  setUser: (req, res) => {
    const { session } = req;
    


    // const { username, password } = req.body;



    // users.push({ id, username, password });
    // id++;


    // .then(() => res.status(200).send('Success')
    // .catch( (err) => res.status(500).send(err)))
  },


  authenticateUser: function (req, res) {
    if (!req.user) {
      res.redirect('/api/auth/login')
    }
    else {
      res.status(200).send(JSON.stringify(req.user, null, 10))
    }
    // .then(() => res.status(200).send('Success')
    // .catch(err => res.status(500).send(err))
  },


  logoutUser: function (req, res) {
    const { sesssion } = req;
    session.destroy();
    res.status(200).send(req.session);
    //  .then(() => res.status(200).send('Success')
    // .catch(err => res.status(500).send(err)))
  }
}