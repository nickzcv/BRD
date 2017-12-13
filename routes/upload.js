const express = require('express');
const router = express.Router();
const multer = require('multer');


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
var upload = multer({storage: storage}).single('userPhoto');

router.route('/upload/profile')
	.post(function(req, res) {

	  console.log(req.file.image);

    if(req.file){
      image = req.file.filename;
    }
    upload(req, res, function(err) {
      if(err) {
        return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
    });
  });


module.exports = router;