const express = require('express');
const router = express.Router();
//Define mongoose Schema
var Company = require('../models/company');

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.route('/company')
	// create Company
	.post(auth, function(req, res) {
		var company = new Company();

    ad.type = req.body.type;
    ad.object = req.body.object;
    ad.category = req.body.category;
    ad.title = req.body.title;
    ad.description = req.body.description;
    ad.country = req.body.country;
    ad.city = req.body.city;
    ad.price = req.body.price;
    ad.photo = req.body.photo;
    ad.expirationDate = req.body.expirationDate;
    ad.contacts = req.body.contacts;
    ad.created_at = new Date();
    ad.updated_at = new Date();
    ad.notes = null;
    ad.status = null;
    ad.isActive = false;
    ad.userId = req.body.userId;
    ad.userName = req.body.userName;
    ad.company = null;
    ad.favorites = [];

		// save the company and check for the errors
    ad.save(function(err) {
			if (err)
				res.json({
				  error: true,
				  errorDescription: err,
				});

			res.json({
			  message: 'Company created!'
			});
		});

	});


// on routes that end in /companies/:userId
// ----------------------------------------------------
router.route('/companies/:userId')
  // get the companies by userId
  .get(function(req, res) {

    Company.find({
      'userId': req.params.userId
      }, function(err, companies) {
      if (err)
        res.json({
          error: true,
          errorDescription: err,
        });

      res.json(companies);
    });
  });

// on routes that end in /company/:company_id
// ----------------------------------------------------
router.route('/company/:company_id')
// get the ad with :ad_id
	.get(function(req, res) {
    Company.findById(req.params.company_id, function(err, company) {
			if (err)
        res.json({
          error: true,
          errorDescription: err,
        });

			res.json(company);
		});
	})
	// update
	.put(auth, function(req, res) {
    Ad.findById(req.params.ad_id, function(err, ad) {

      if (err)
        res.json(err);

      ad.type = req.body.type;
      ad.object = req.body.object;
      ad.category = req.body.category;
      ad.title = req.body.title;
      ad.description = req.body.description;
      ad.country = req.body.country;
      ad.city = req.body.city;
      ad.price = req.body.price;
      ad.photo = req.body.photo;
      ad.expirationDate = req.body.expirationDate;
      ad.contacts = req.body.contacts;
      ad.updated_at = new Date();
      ad.status = 'UPDATED';

			ad.save(function(err) {
				if (err) {
          res.json(err);
        } else {
          res.json({ message: 'Ad updated!' });
        }

			});

		});
	})
	// delete
	.delete(auth, function(req, res) {
	  /*
	  TODO: uncomment when admin panel will be ready
	  TODO: check for hacking
		Ad.remove({
			_id: req.params.ad_id
		}, function(err, ad) {
			if (err)
				res.json(err);

			res.json({ message: 'Successfully deleted' });
		});
		*/
	});



module.exports = router;