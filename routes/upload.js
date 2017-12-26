const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const multer = require('multer');


// Upload profile avatar
router.route('/upload/profile')
	.post(function(req, res) {
    // Get base64 string from json request
    var userId = req.body.user;
    var base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
    // Save image
    fs.writeFile('./app/img/avatar/'+userId+'.png', base64Data, 'base64', function(err) {
      if (err) {
        console.log(err)
      }
    });
    res.json({ success: true });
  });


// Upload ads covers
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './app/img/ads/');
  },
  filename: function (req, file, callback) {
    callback(null, req.body.newfilename + '.png');
  }
});
var upload = multer({storage: storage}).single('photo');

router.route('/upload/ad')
.post(function(req, res) {
  upload(req, res, function(err) {
    if(err) {
      console.log(err);
      return res.json({imageUploaded: false});
    }
    return res.json({imageUploaded: true});
  });
});

module.exports = router;