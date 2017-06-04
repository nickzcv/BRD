const express = require('express');
const router = express.Router();              // get an instance of the express Router

//Define mongoose Schema
var User = require('../models/user');

router.route('/users')
	// create a User (accessed at POST /api/users)
	.post(function(req, res) {

		var user = new User();
		
		user.username = req.body.email;
		user.password = req.body.password;

		user.notes = '';

		// save the user and check for errors
		user.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'User created!' });
		});

	})

	// get all the users (accessed at GET /api/users)
	.get(function(req, res) {

    User.find(function(err, user) {
      if (err)
        res.send(err);

      res.json(user);

    });
	});

// on routes that end in /users/:user_id
// ----------------------------------------------------
router.route('/user/:user_id')

// get the user with :user_id
	.get(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {
			if (err)
				res.send(err);

			res.json(user);
		});
	})
	// update
	.put(function(req, res) {
		User.findById(req.params.user_id, function(err, user) {

			if (err)
				res.send(err);

			user.name = req.body.name;
			user.location = req.body.location;
			user.meta.age = req.body.age;
			user.meta.website = req.body.website;
			user.meta.email = req.body.email;
			user.meta.phone = req.body.phone;
			user.updated_at = new Date();

			user.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'User updated!' });
			});

		});
	})

	// delete
	.delete(function(req, res) {
		User.remove({
			_id: req.params.user_id
		}, function(err, user) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});



module.exports = router;