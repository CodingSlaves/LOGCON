var express = require('express');
var router=express.Router();
var problem = require('./ProblemModel');
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

        }
        else{
            res.render('404',{
                message:'올바른 flag가 아닙니다.'
            });
        }
    })
});

module.exports = router;
