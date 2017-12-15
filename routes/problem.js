var express = require('express');
var router = express.Router();
var ProblemModel = require('./ProblemModel');
var model = require('./model');

router.get('/get/:num',function(req,res){
    if(!req.session) res.redirect('/login');
    else{
     ProblemModel.findOne(
         {pnum:req.param('num')},
         function(err,result){
             if(err){
                 console.log('fucking error'+err);
                 throw err;
             }
             if(result){
                 var problems = result.string;
                 var pnumber = result.pnumber;
                 res.render('',{problems:problems},{pnumber:pnumber});
             }
             else console.log('Failed');
         }
     )}
}).post('/send/:num',function(req,res){
    ProblemModel.findOne(
        {pnumber:req.param('num')},
        function(err,result){
            if(err){
                console.log('fucking err in send/problem'+err);
                throw err;
            }
            if(result){
                var answer = result.answer;
                var score = result.score;
                if(req.body.answer===answer){
                    res.render('',{correct:'correct!'});
                    model.findOne(
                        {username:req.session.username},
                        function(err,result){
                          if(err){
                              console.log('fucking err in send/user'+err)
                              throw err;
                          }
                          if(result){
                              console.log('Success Find');
                              result.update(
                                  {score:score+result.score},
                                  function(err,result){
                                      if(err){
                                          console.log('fucking err in update');
                                          throw err;
                                      }
                                      if(result)
                                        console.log('Success update');
                                  }
                              )
                          }
                        }
                    )
                }
            }
        }
    )
});

module.exports = router;
