var express = require('express');
var router=express.Router();
var model = require('./model');
var filter = require('./filtering');
router.get('/', function(req, res) {
    res.render('fuckkkkkkkkkkkkkk');
}).post('/',function(){
    model.find(function(err,result){
        if(err){
            console.log("fucking err in bugfix");
            throw err;
        }
        if(result){
            for(var i in result){
                user = new model({
                    nickname:result[i].nickname,
                    id:result[i].id,
                    password:result[i].password,
                    school:result[i].school,
                    email:result[i].email,
                    URL:result[i].email,
                    verification:result[i].verification,
                    grade:result[i].grade,
                    score:0
                });
                user.save();
                result[i].remove();
            }
        }
    });
});

module.exports = router;