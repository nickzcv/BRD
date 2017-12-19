const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

router.route('/upload/profile')
	.post(function(req, res) {
    // Get base64 string from json request
    let userId = req.body.user;
    let base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
    // Save image
    fs.writeFile('./app/img/avatar/'+userId+'.png', base64Data, 'base64', function(err) {
      if (err) {
        console.log(err)
      }
    });
    res.json({ success: true });
  });


module.exports = router;