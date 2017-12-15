var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/',function(req,res){
    model.find(function(err,result){
        if(err){
            throw err;
        }
        if(result){
            result.sort({score:-1});
            res.render('ranking',{users:result});
        }
    });
});

module.exports = router;