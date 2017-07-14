const mongoose = require('mongoose');

var adSchema = new mongoose.Schema({
  phone: String,
  country: {type: Object},
  city: {type: Object},
  photo: String,
  created_at: Date,
  updated_at: Date,
  notes: String,
  status: String,
  isActive: {type: Boolean, default: false}
});


module.exports = mongoose.model('Ad', adSchema);