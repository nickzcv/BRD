const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');



router.route('/upload/profile')
	.post(function(req, res) {
    // Get base64 string from json request
    let base64Data = req.body.image.replace(/^data:image\/png;base64,/, "");
    // Save image
    fs.writeFile("./app/img/avatar/out.png", base64Data, 'base64', function(err) {
      if (err) {
        res.json({ error: 'Failed to write file' });
      }

    });

    res.json({ success: 'Saved file' });
  });


module.exports = router;