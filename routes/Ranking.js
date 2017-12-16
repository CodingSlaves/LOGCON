var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/high',function(req,res){
    model.find({grade:true},function(err,result){
        if(err){
            throw err;
        }
        if(result){
            result.sort({score:-1});
            res.render('ranking',{users:result});
        }
    });
}).get('/middle',function(req,res){
    model.find({grade:false},function(err,result){
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