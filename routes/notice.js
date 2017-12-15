var express = require('express');
var router = express.Router();
var NoticeModel = require('./NoticeModel');
route.get('/',function(req,res){
    NoticeModel.find({notice:true},function(err,result){
        if(err){
            console.log("err in notice find");
            throw err;
        }
        if(result){
            res.render("notice",{notice:result});
        }
    });
});