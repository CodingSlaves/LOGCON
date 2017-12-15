var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/',function(req,res){
    model.find(function(err,result){
        res.render("ranking",{userlist:result});
    })
});

module.exports = router;
