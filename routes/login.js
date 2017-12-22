var express = require('express');
var router=express.Router();
var model = require('./model');
var filter = require('./filtering');

router.post('/',function(req,res){
    model.findOne({
        id:req.body.id
    }, function(err, result){
        if(err){
            console.log('/login ERR : '+err);
            throw err
        }
        if(result){
            if(result.password === req.body.password){
                if(result.verification === false){
                    req.session.nickname = result.nickname;
                    res.redirect("/re-verify");
                }else {
                    console.log('Login : ' + result.nickname);
                    req.session.nickname = result.nickname;
                    req.session.score = result.score;
                    req.session.problems = result.problems;
                    res.redirect('/');
                }
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
