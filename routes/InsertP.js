var express = require('express');
var router = express.Router();
var ProblemModel = require('./ProblemModel');
function randomString(num) {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = num;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}
/* GET home page. */
router.get('/', function(req, res) {
    res.render('InsertP.html');
}).post('/',function(req,res){
    problem = new ProblemModel({
            title:req.body.title,
            answer:req.body.answer,
            score:req.body.score,
            flag:randomString(10)
        });
    ProblemModel.findOne({
            title:problem.title
        },
        function(err,result){
            if(err){
                console.log('error'+err);
                throw err;
            }
            if(!result){
                problem.save(function(err){
                    if(err){
                        console.log("save failed"+err);
                        throw err;
                    }else {
                        console.log("save success");
                        res.json({save:'success'});
                    }
                })
            }else {
                res.json({
                    success:false,
                    reason:'Already_used_title'
                })
            }
        }
    )
});

module.exports = router;
