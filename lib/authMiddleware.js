module.exports.isAuth = (req, res, next) => {
  // console.log(req.isAuthenticated());
  console.log("Is Authenticated: ", req.isAuthenticated());
  console.log("Cookie Auth :", req.cookies.auth);
  console.log("Sesssion : ", req.session);
  if (req.isAuthenticated()) {
    next();
  } else {
    res
      .status(401)
      .json({ msg: "You are not authorized to view this resource" });
  }
};
