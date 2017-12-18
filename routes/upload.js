const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const bodyparser = require('body-parser');
const multer = require('multer');

router.use(bodyparser.urlencoded({
  extended: true
}));

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    console.log('1');
    callback(null, './app/img/avatar/');
  },
  filename: function (req, file, callback) {
    console.log('2');
    callback(null, file.originalname + '.jpg');
  }
});
var upload = multer({storage: storage}).single('file');



router.route('/upload/profile')
	.post(function(req, res) {
    console.log('post');
    upload(req, res, function(err) {
      if(err) {
        console.log(req.file)
        return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
    });
  });


module.exports = router;