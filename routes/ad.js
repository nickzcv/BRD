const express = require('express');
const router = express.Router();
//Define mongoose Schema
var Ad = require('../models/ad');

var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

router.route('/ads')
	// create Ad (accessed at POST /api/ads)
	.post(auth, function(req, res) {
		var ad = new Ad();

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

		// save the ad and check for errors
    ad.save(function(err) {
			if (err)
				res.json(err);

			res.json({ message: 'Ad created!' });
		});

	})
	// get all the ads (accessed at GET /api/ads)
	.get(function(req, res) {
    Ad.find({}, function(err, ad) {
      if (err)
        res.json(err);

      res.json(ad);
    });
	});

// on routes that end in /ad/:ad_id
// ----------------------------------------------------
router.route('/ad/:ad_id')
// get the ads with :ad_id
	.get(function(req, res) {
		Ad.findById(req.params.ad_id, function(err, ad) {
			if (err)
				res.json(err);

			res.json(ad);
		});
	})
	// update
	.put(auth, function(req, res) {
		User.findById(req.params.ad_id, function(err, ad) {

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
      //ad.isActive = req.body.isActive;
      //ad.userId = req.body.userId;

			ad.save(function(err) {
				if (err)
					res.json(err);

				res.json({ message: 'Ad updated!' });
			});

		});
	})
	// delete
	.delete(auth, function(req, res) {
		Ad.remove({
			_id: req.params.ad_id
		}, function(err, ad) {
			if (err)
				res.json(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;