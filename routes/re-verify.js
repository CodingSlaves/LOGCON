var express = require('express');
var router = express.Router();
var user  = require('./model');
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'teamlogsr@gmail.com',
        pass: 'teamlogzzang2017'
    }
});
/* GET home page. */
router.get('/', function(req, res) {
    res.render('re-verify');
}).post('/',function(req,res){
    user.findOne(
        {nickname:req.session.nickname},
        function(err,result){
            if(err){
                console.log(err);
                console.log('err in re-verify');
                throw err;
            }
            if(result){
                var presult = result;
                user.findOne({email:req.body.email},function(err,result){
                   if(err) throw err;
                   else if(result) {
                       res.render('404',{message:"already used email"});
                   }else{
                       presult.update({email:req.body.email},function(err){
                               if(err){
                                   console.log(err);
                                   throw err;
                               }
                           }
                       );
                       var mailOptions = {
                           from: '팀로그 <teamlogsr@gmail.com>',
                           to: req.body.email,
                           subject: '이메일 인증 - LOGCON',
                           text:'가입완료를 위해 <'+presult.URL+'> 를 입력해주세요'
                       };
                       smtpTransport.sendMail(mailOptions, function(error, response){
                           console.log(req.body.email);
                           if (error){
                               console.log(error);
                           } else {
                               console.log("Message sent : " + response);
                           }
                           smtpTransport.close();
                       });
                       res.redirect('/verification');
                   }
                });

            }else{
                console.log('err in re-verify2');
            }
        }
    )
});

module.exports = router;