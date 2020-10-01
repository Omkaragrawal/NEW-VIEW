/* eslint-disable no-unused-vars */

const bodyParser = require("body-parser");
const helmet = require("helmet");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const compression = require("compression");
const cors = require("cors");
const session = require("express-session");
const SessionStore = require("express-session-sequelize")(session.Store);
const pg = require("pg");
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");
const { check, validationResult, sanitizeBody } = require("express-validator");

pg.defaults.ssl = true;
var sequelize = require("./models/databases");
/*
 **************************Routers********************************************************************
 */

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cookieParser());

app.use(
  session({
    genid: function (req) {
      return uuidv4(); // use UUIDs for session IDs
    },
    name: "auth",
    secret: "NEW-View434343",
    // store: new SessionStore({
    //   db: sequelize.sequelize,
    // }),
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: false, // ENABLE ONLY ON HTTPS
    },
  })
);
require("./config/passport");
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: "http://localhost:8082", // reqexp will match all prefixes
    methods: "GET,HEAD,POST,PATCH,DELETE,OPTIONS",
    credentials: true, // required to pass
    allowedHeaders: "Content-Type, Authorization, X-Requested-With",
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
