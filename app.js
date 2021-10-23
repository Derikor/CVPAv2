const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const router = require('./rutas');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const engine = require('ejs-mate');

require('./public/passport/local-auth')
//archivos CVPA
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/public/views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(session({
    secret: 'mysecretsession',
    resave: false,
    saveUninitialized: false
  }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    app.locals.signinMessage = req.flash('signinMessage');
    app.locals.signupMessage = req.flash('signupMessage');
    app.locals.user = req.user;
    next();
  });
// rutas 
app.use('/',router);

module.exports = app