var express = require('express');
var router = express.Router();
var model = require('./model');

var pscore=[300,300,300,500,200,100,400,300,100,300,200,500,100,100,100,700,0,0,0,0,0,0];
var score =0;
router.get('/high',function(req,res){
    model.find({grade:true}).sort({score:-1}).exec(function(err,result){
        if(err){
            throw err;
        }
        if(result){
            res.render('ranking',{users:result});
        }
    });
}).get('/middle',function(req,res){
    model.find({grade:false}).sort({score:-1}).exec(function(err,result){
        if(err){
            throw err;
        }
        if(result){
            res.render('ranking',{users:result});
        }
    });
})

module.exports = router;
