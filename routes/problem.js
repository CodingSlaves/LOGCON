var express = require('express');
var router = express.Router();
var ProblemModel = require('./ProblemModel');
var model = require('./model');

router.get('/get/:problem_title',function(req,res){
    if(!req.session) res.redirect('/login');
    else{
        res.render(req.params.problem_title);
    }
}).post('/send/:problem_title',function(req,res){
    ProblemModel.findOne(
        {title:req.params.problem_title},
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
                        {nickname:req.session.nickname},
                        function(err,result){
                          if(err){
                              console.log('fucking err in send/user'+err)
                              throw err;
                          }
                          if(result){
                              result.update(
                                  {score:score+result.score},
                                  function(err){
                                      if(err){
                                          console.log('fucking err in update');
                                          throw err;
                                      }
                                  }
                              )
                          }
                        }
                    )
                }else{
                    res.render('');

                }
            }
        }
    )
});

module.exports = router;
