const mongoose = require('mongoose');

var companySchema = new mongoose.Schema({
  name: String,
  country: {type: Object},
  city: {type: Object},
  address: String,
  phones: {type: []},
  website: String,
  logo: String,
  description: String,
  year: String,
  count: String,
  category: {type: Object},
  employees: {type: Object},
});


module.exports = mongoose.model('Company', companySchema);