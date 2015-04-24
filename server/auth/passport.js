var models = require('../database/db');
var passport = require('passport');
var utils = require('./authController.js');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

passport.serializeUser(function(user,done){
  console.log("In passports SerializeUser, about to serialize User: ");
  console.log(user);
  done(null,user);

});

passport.deserializeUser(function(user,done){
  console.log("In passports deSerializeUser, about to deserialize User: ", user);
  done(null,user);
});


passport.use('login', new LocalStrategy({
  username: 'username',
  password: 'password'
}, function(username,password, done){
  models.Users.find({where: {username:username}})
    .then(function(user){
      console.log('checking passport user...', user);
    if (!user){

      console.log('User does not exist! Try logging in with a different user');
      return done(null, false, {message: 'That user does not exist!'});
    } else if (!utils.isValidPassword(user,password)){
      console.log('Password is invalid! Try a different password');
      return done(null, false, {message:'Invalid password!'});
    } else if (user){
      console.log('Login successful! logging you in right now');
      //verify password
      return done(null, user, {message:'User exists!'});
    }
  });
}));

passport.use('signup', new LocalStrategy({},
  function(username,password,done){
    console.log("this is the username",username);
    console.log("this is the password",password);
    models.Users.find({where: {username:username}})
    .then(function(user){
      if(!username || !password){
        return done(null, false, {message: 'Please fill out all forms!'});
      } else if (!user){
        bcrypt.genSalt(10,function(err,salt){
          bcrypt.hash(password,salt,null,function(err,hash){
            models.Users
            .create({password:hash,username:username, salt:salt});
          });
        });
        return done(null,false,{message:'User Created!'});
      } else if (user){
        return done(null,false,{message:'User already exists!'});
      }
    });
}));





module.exports = passport;
