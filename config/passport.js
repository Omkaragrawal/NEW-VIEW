const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userdb = require("../models/databases").users;
var bcrypt = require("bcryptjs");

const customFields = {
  usernameField: "username",
  passwordField: "password",
};

const verifyCallback = async (username, password, done) => {
  var user = await userdb.findOne({ where: { username: username } });
  if (user) {
    var isvalid = await bcrypt.compare(password, user.password);
    if (isvalid) {
      done(null, user);
    } else {
      done(null, false);
    }
  } else {
    done(null, false);
  }
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((userId, done) => {
  userdb
    .findOne({ where: { id: userId } })
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
