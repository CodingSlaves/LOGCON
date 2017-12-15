var express = require('express');
var router = express.Router();
var NoticeModel = require('./NoticeModel');
var Date = require('date-utils');
var newDate = new Date();
var time = newDate.getTime();
router.get('/',function(req,res){
    res.render("upnotice");
}).post('/',function(req,res){
   notice = new NoticeModel({
       title:req.body.title,
       script:req.body.script,
       time:time,
       notice:true
    });
   notice.save(function(err){
       if(err){
           console.log("err in notice save");
           throw err;
       }
   });
});
