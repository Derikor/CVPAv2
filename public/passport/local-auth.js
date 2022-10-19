const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/login');
const lg = require('../models/horario_especialidad');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req,email, password, done) => {
  const user = await User.findOne({email: email})
  console.log(user)
  if(user) {
    return done(null, false, req.flash('signupMessage', 'EL EMAIL DEL ADMINISTRADOR YA EXISTE'));
  }
  else {
    const newUser = new User();
    newUser.username = req.param('username');
    newUser.email = email;
    newUser.cell = req.param('cell');
    newUser.password = newUser.encryptPassword(password);
  console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({email: email});
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'EMAIL DE ADMINISTRADOR NO REGISTRADO'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'CONTRASEÑA INCORRECTA'));
  } 
  done(null, user);
}));