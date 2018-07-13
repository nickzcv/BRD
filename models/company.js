const mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  companyName: String,
  logo: String,
  description: String,
  category: {type: Object},
  country: {type: Object},
  city: {type: Object},
  address: String,
  phones: {type: []},
  website: String,
  year: String,
  count: String,
  employees: {type: Object},
  created_at: Date,
  updated_at: Date,
  isActive: {type: Boolean, default: true},
  createdBy: {type: mongoose.Schema.ObjectId},
});


module.exports = mongoose.model('Company', companySchema);