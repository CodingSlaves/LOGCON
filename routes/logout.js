var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/',function(req,res){
    console.log('Logout : ',req.session.nickname);
    req.session.destroy(function(err){
        if(err){
            console.log("fucking err in logout");
            throw err;
        }else
            res.redirect('/');
    });
});

module.exports = router;