const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Logueo = new mongoose.Schema({
    username:String,
    email:String,
    cell:{type: String},
    password:String,
    logindate:{ type: Date , default: Date.now()},
    lastlogin: Date
});

Logueo.methods.encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };
  
Logueo.methods.comparePassword= function (password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = mongoose.model('login',Logueo);