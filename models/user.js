const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

var User = new Schema({
  local : {
    email : String,
    password : String
  }
});

User.methods.hashPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

User.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);