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
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const user = await User.findOne({'username': username})
  console.log(user)
  if(user) {
    return done(null, false, req.flash('signupMessage', 'EL NOMBRE DE ADMINISTRADOR YA EXISTE'));
  } else {
    const newUser = new User();
    newUser.username = username;
    newUser.password = newUser.encryptPassword(password);
  console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

passport.use('local-signin', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, username, password, done) => {
  const user = await User.findOne({username: username});
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'ADMINISTRADOR NO REGISTRADO'));
  }
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'CONTRASEÑA INCORRECTA'));
  } 
  return done(null, user);
}));

passport.use('inicio', new LocalStrategy({
  usernameField: 'nombre',
  passwordField: 'codp',
  passReqToCallback: true
}, async (req, nombre, codp, done) => {
  const user = await lg.findOne({nombre: nombre});
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'ADMINISTRADOR NO REGISTRADO'));
  }
  if(!user.comparePassword(codp)) {
    return done(null, false, req.flash('signinMessage', 'CONTRASEÑA INCORRECTA'));
  } 
  return done(null, user);
}));