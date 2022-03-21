const User = require('../models/userModel');
// dont require bcrypt and whatnot

const userController = {};

/**
* createUser - create and save a new User into the database.
*///signing up
userController.createUser = (req, res, next) => {
  console.log(req.body)
  const { username, password } = req.body.accountSelector;
  User.create({
    username: username,
    password: password, 
  }, 
  (err, User) => {
    if (err) {
      return next({
        log: 'create acct err',
        status: 400,
        message: { err: 'something wrong with createacct middleware'} 
      })
    } else {
      res.locals.newUser = User;
      console.log('in else')
      return next();
    }
  })
};

    /**
* verifyUser - Obtain username and password from the request body, locate
* the appropriate user in the database, and then authenticate the submitted password
* against the password stored in the database.
*/
userController.verifyUser = (req, res, next) => {
console.log('13')
  if(req.body.accountSelector.username && req.body.accountSelector.password){
    User.findOne({username: req.body.accountSelector.username}, (err, docs) => {
      console.log('docs: ', docs);
      if(!err){
        if (docs.password === req.body.password) {
          console.log('Successful login');
           return next();
        } else {
          // alert('Incorrect Password');
          res.redirect('/signin');
        }
      } else { 
        return next(err);
      }
      // password is correct
    });

  } else {
    res.redirect('/signup'); // redirects if username | password is empty
  }
}

userController.getAllUsers = (req, res, next) => {
  console.log(req);
  User.find({}, (err, users) => {
    // if a database error occurs, call next with the error message passed in
    // for the express global error handler to catch
    if (err) return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
    
    // store retrieved users into res.locals and move on to next middleware
    res.locals.users = users;
    return next();
  });
};

module.exports = userController;
