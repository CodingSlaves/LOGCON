var express = require('express');
var router = express.Router();
var ProblemModel = require('./ProblemModel');
var model = require('./model');

router.get('/get/:problem_title',function(req,res){
        ProblemModel.findOne({title:req.params.problem_title},
            function(err,result){
                if(err){
                    console.log("err in get problems");
                    throw err;
                }
                if(result){
                    res.render(req.params.problem_title);
                }
            }
        );
}).post('/send/:problem_title',function(req,res){
    ProblemModel.findOne(
        {title:req.params.problem_title},
        function(err,result){
            if(err){
                console.log('fucking err in send/problem'+err);
                throw err;
            }
            if(result){
                if(req.body.answer===result.answer){
                    res.render('right-answer');
                }else{
                    res.render('left-answer');
                }
            }
        }
    );
});

module.exports = router;
