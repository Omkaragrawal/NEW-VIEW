const express = require("express");
const router = express.Router();
const isAuth = require("../lib/authMiddleware");
var userdb = require("../models/databases").User;
var passport = require("passport");

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login-failure",
    successRedirect: "login-success",
  })
);

router.get("/login-success", (req, res, next) => {
  res.json({ status: true });
});

router.get("/login-failure", (req, res, next) => {
  res.json({ status: false, message: "Wrong Username or password" });
});

router.get("/register", async (req, res) => {
  let { name, email, username, password } = req.body;
  var salt = await bcrypt.genSalt(10);
  var hash = await bcrypt.hash(password, salt);
  var newUser = await userdb.create({
    name: name,
    username: username,
    password: hash,
    email: email,
  });
  if (newUser) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});

router.get("/logout", (req, res, next) => {
  req.logout();
  res.json({ status: true });
});

module.exports = router;
