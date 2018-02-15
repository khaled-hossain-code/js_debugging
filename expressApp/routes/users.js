var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  let name = req.query.name;

  res.send(`hello ${name}`);
});

module.exports = router;
