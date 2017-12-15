var express = require('express');
var router=express.Router();
var model = require('./model');
var filter = require('./filtering');

router.post('/',function(req,res){
    model.findOne({
        nickname:req.body.nickname
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
                res.redirect('/');
            }
            else if(result.password !== req.body.password){
                console.log('Password Error : '+result.nickname);
                res.render('login',{
                    err:' (Password Error)'
                });
            }
        }
        else{
            console.log("ID Error");
            res.render('404',{
                message:' (ID Error)'
            });
        }
    })
});


module.exports = router;
