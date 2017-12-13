const express = require('express');
const router = express.Router();
const multer = require('multer');


var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './app/img/avatar/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});
var upload = multer({storage: storage}).single('userPhoto');

router.route('/upload/profile')
	.post(function(req, res) {
    if(req.file){
      image = req.file.filename;
      console.log(image);
    }
    upload(req,res,function(err) {
      if(err) {
        return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
    });
  });


module.exports = router;