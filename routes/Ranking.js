var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/',function(req,res){
    model.find({verification:true}).sort({score:-1},function(err,result){
        if(err){
            console.log("db(ranking)err");
            throw err;
        }
        if(result){
            res.render("ranking",{userlist:result});
        }

    })
});

module.exports = router;
