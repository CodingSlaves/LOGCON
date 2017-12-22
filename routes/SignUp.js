var express = require('express');
var router = express.Router();
var model = require('./model');
var nodemailer = require('nodemailer');

function randomString(num) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = num;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
//document.randform.randomfield.value = randomstring;
    return randomstring;
}
var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'teamlogsr@gmail.com',
        pass: 'teamlogzzang2017'
    }
});
var problems = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
/* GET home page. */
router.post('/',function(req,res){
    user = new model({
        nickname:req.body.nickname,
        id:req.body.id,
        password:req.body.password,
        school:req.body.school,
        email:req.body.email,
        URL:randomString(10),
        verification:false,
        grade:req.body.grade,
        score:0,
        problems:problems
    });
    model.findOne({
        email:req.body.email,
        id:req.body.id,
        nickname:req.body.nickname
    }, function(err, result) {
        if (err) {
            console.log("/SignUp Error : " + err);
            throw err;
        }
        if (result) {
            res.render('404',{
                message:'이미 가입된 아이디 혹은 이미 가입된 이메일,닉네임 입니다.'
            });
        }
        else {
            user.save(function(err){
                if(err){
                    console.log(err);
                    res.render('404',{message:err});
                }else{
                    var mailOptions = {
                        from: '팀로그 <teamlogsr@gmail.com>',
                        to: req.body.email,
                        subject: '이메일 인증 - LOGCON',
                        text:'가입완료를 위해 <'+user.URL+'> 를 입력해주세요'
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
        }
    })});

module.exports = router;