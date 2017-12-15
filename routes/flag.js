var express = require('express');
var router=express.Router();
var problem = require('./ProblemModel');
var model = require('./model');
var filter = require('./filtering');

router.post('/',function(req,res){
    problem.findOne({
        flag:req.body.flag
    }, function(err, result){
        if(err){
            console.log('err in flag input');
            throw err
        }
        if(result){
            res.render('right-answer');
            var score = result.score;
            model.findOne(
                {nickname:req.session.nickname},
                function(err,result){
                    if(err){
                        console.log("err in flag right");
                        throw err;
                    }
                    if(result){
                        result.update({score:req.session.score + score},
                            function(err){
                            if(err){
                                console.log("err in flag right in update");
                                throw err;
                            }
                        });
                    }
                }
            );
        }
        else{
            res.render('left-answer');
        }
    })
});

module.exports = router;
