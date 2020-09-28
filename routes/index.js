const express = require("express");

const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.send("New View API Working");
});

module.exports = router;
