const express = require("express");
const router = express.Router();
const isAuth = require("../lib/authMiddleware").isAuth;
var userdb = require("../models/databases").users;
var favouritesdb = require("../models/databases").favourites;
var likesdb = require("../models/databases").likes;
var passport = require("passport");
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login-failure",
    successRedirect: "/users/login-success",
  })
);

router.get("/login-success", (req, res, next) => {
  res.json({ status: true });
});

router.get("/login-failure", (req, res, next) => {
  res.json({ status: false, message: "Wrong Username or password" });
});

router.post("/register", async (req, res) => {
  let { name, username, email, password } = await req.body;
  console.log(req.body);
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

router.get("/favourites", isAuth, async (req, res) => {
  var favs = await favouritesdb.findAll({
    attributes: ["movieId"],
    raw: true,
    nest: true,
    where: { userId: req.user.id },
  });
  if (favs) {
    console.log(favs);
    res.json({ status: true, favs: favs });
  } else {
    res.json({ status: false, message: "No favourites found!" });
  }
});

router.post("/favourites", isAuth, async (req, res) => {
  var check = await favouritesdb.findOne({
    where: { movieId: req.body.movieid },
  });
  if (!check) {
    var newFav = await favouritesdb.create({
      userId: req.user.id,
      movieId: req.body.movieid,
    });

    if (newFav) {
      res.json({ status: true });
    } else {
      res.json({ status: false, message: "Error" });
    }
  } else {
    res.json({ status: false, message: "Already Added to favourites" });
  }
});

router.get("/like", isAuth, async (req, res) => {
  var liked = await likesdb.findAll({
    attributes: ["movieId"],
    raw: true,
    nest: true,
    where: { userId: req.user.id },
  });
  if (liked) {
    console.log(liked);
    res.json({ status: true, liked: liked });
  } else {
    res.json({ status: false, message: "No Liked Movies found!" });
  }
});

router.post("/like", isAuth, async (req, res) => {
  var check = await likesdb.findOne({
    where: { movieId: req.body.movieid },
  });
  if (!check) {
    var newLike = await likesdb.create({
      userId: req.user.id,
      movieId: req.body.movieid,
    });

    if (newLike) {
      res.json({ status: true });
    } else {
      res.json({ status: false, message: "Error" });
    }
  } else {
    res.json({ status: false, message: "Already Added to Liked List" });
  }
});

module.exports = router;
