var express = require('express');
var router = express.Router();
var user  = require('./model');
/* GET home page. */
router.get('/', function(req, res) {
    res.render('verify');
}).post('/',function(req,res){
    user.findOne(
        {URL:req.body.URL},
        function(err,result){
            if(err){
                console.log(err);
                throw err;
            }
            if(result){
                result.update({verification:true},function(err){
                    if(err){
                        console.log(err);
                        throw err;
                    }
                }
                );
                res.redirect('/success');
            }else{
                res.render('404',{message:'인증번호가 틀립니다'});
            }
        }
    )
});

module.exports = router;