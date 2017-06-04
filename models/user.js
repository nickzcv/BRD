const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  name: String,
  phone: String,
  location: String,
  photo: String,
  created_at: Date,
  updated_at: Date,
  notes: String,
  status: String,
  isActive: {type: Boolean, default: false}
});

module.exports = mongoose.model('User', User);