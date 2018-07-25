const mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  companyName: String,
  logo: String,
  description: String,
  categoryId: String,
  companyFilters: {type: Object},
  country: {type: Object},
  city: {type: Object},
  address: String,
  phones: String,
  website: String,
  year: String,
  count: String,
  employees: {type: Object, default: {}},
  created_at: Date,
  updated_at: Date,
  isActive: {type: Boolean, default: true},
  createdBy: {type: mongoose.Schema.ObjectId},
});


module.exports = mongoose.model('Company', companySchema);