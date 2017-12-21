var express = require('express');
var router = express.Router();
var ProblemModel = require('./ProblemModel');
var model = require('./model');

router.get('/get/:problem_title',function(req,res){
    if(!req.session) res.redirect('/need-login');
    else{
        ProblemModel.findOne({title:req.params.problem_title},
            function(err,result){
                if(err){
                    console.log("err in get problems");
                    throw err;
                }
                if(result){
                    if(req.session.problems[result.pnumber] === true){
                        res.render('sorted-answer');
                    }else
                        res.render(req.params.problem_title);
                }
            }
        );
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
                var pnumber = result.pnumber;
                if(req.body.answer===answer){
                    model.findOne(
                        {nickname:req.session.nickname},
                        function(err,result){
                          if(err){
                              console.log('fucking err in send/user'+err);
                              throw err;
                          }
                          if(result){
                              req.session.problems[pnumber] = true;
                              result.update(
                                  {problems:req.session.problems},
                                  function(err){
                                      if(err){
                                          console.log('fucking err in update');
                                          throw err;
                                      }
                                      console.log(req.session.problems);
                                      res.render('right-answer');
                                  }
                              );
                              result.update(
                                  {score:score+result.score},
                                  function(err){
                                      if(err){
                                          console.log('fucking err in update'+score+result.score);
                                          throw err;
                                      }
                                      req.session.score += score;
                                  }
                              )
                          }
                        }
                    );
                }else{
                    res.render('left-answer');
                }
            }
        }
    );
});

module.exports = router;
