var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    if(req.session.nickname && (req.session.score>=0)) res.render('sign-in',{nickname:req.session.nickname,score:req.session.score});
    else res.render('index');
    //res.render('delay');
});

module.exports = router;
