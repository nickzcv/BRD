const express = require('express');
const path = require('path');
const basicAuth = require('../auth/basic');
const router = express.Router();

router.get('/', basicAuth.isAuthenticated, function (req, res) {
  // res.sendFile(path.join(__dirname, './app/index.html'));
  res.send("<html><body>Welcome"+ req.user.displayName+"</body></html>");
});

module.exports = router;