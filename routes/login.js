var express = require('express');
var router=express.Router();
var model = require('./model');
var filter = require('./filtering');
var plus = require('./PlusModel');

router.post('/',function(req,res){
    model.findOne({
        id:req.body.id
    }, function(err, result){
        if(err){
            console.log('/login ERR : '+err);
            throw err
        }
        if(result){
            if(result.verification === false){
                res.redirect("/re-verify");
            }
            if(result.password === req.body.password){
                console.log('Login : '+result.nickname);
                req.session.nickname = result.nickname;
                req.session.score=result.score;
                plus.findOne({nickname:req.session.nickname},
                    function(err,result){
                        if(err){
                            console.log("err in login plus");
                            throw err;
                        }
                        if(!result){
                            var problems = [];
                            for(var i = 0;i<20;i++){
                                problems[i] = false;
                            }
                            plususer = new plus({
                                nickname:req.session.nickname,
                                problems:problems
                            });
                            plususer.save();
                            req.session.problems = problems;
                            res.redirect('/');
                        }else if(result){
                            req.session.problems = result.problems;
                            res.redirect('/');
                        }
                    });
            }
            else if(result.password !== req.body.password){
                console.log('Password Error : '+result.nickname);
                res.render('404',{
                    message:' (Password Error)'
                });
            }
        }
        else{
            console.log("ID Error");
            res.render('404',{
                message:' (ID Error)'
            });
        }
    });
});

module.exports = router;
