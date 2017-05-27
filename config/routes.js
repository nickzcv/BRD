const express = require('express');
const path = require('path');
const basicAuth = require('../auth/basic');
const router = express.Router();

router.get('/', basicAuth.isAuthenticated, function (req, res) {
  res.sendFile(path.join(__dirname, '../app/main.html'));
  // res.send("<html><body>Welcome"+ req.user.displayName+"</body></html>");
});

router.get("/login", function (req, res) {
  res.render("login.ejs");
});

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

router.get("/register", function (req, res) {
  res.render("register.ejs");
});

module.exports = router;