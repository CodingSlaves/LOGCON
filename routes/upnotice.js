var express = require('express');
var router = express.Router();
var NoticeModel = require('./NoticeModel');
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
var h = today.getHours();
var m = today.getMinutes();
router.get('/',function(req,res){
    res.render("upnotice");
}).post('/',function(req,res){
   notice = new NoticeModel({
       title:req.body.title,
       script:req.body.script,
       time:mm+'/'+dd+' '+h+':'+m,
       notice:true
    });
   notice.save(function(err){
       if(err){
           console.log("err in notice save");
           throw err;
       }else{
           res.redirect('/');
       }
   });
});

module.exports = router;