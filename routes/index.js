var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', function (req, res, next) {
  res.json({ year: new Date().getFullYear() });
});

module.exports = router;
