var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    if(req.session.nickname) res.render('challenge');

});

module.exports = router;