const express = require('express');
const router = express.Router();

var multer = require('multer');
var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads');
  },
  filename: function (req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({ storage : storage}).single('userPhoto');

router.route('/upload/profile')
	// create a User (accessed at POST /api/users)
	.post(function(req, res) {
    upload(req,res,function(err) {
      if(err) {
        return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
    });
	});


module.exports = router;