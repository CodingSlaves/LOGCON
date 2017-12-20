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
                result[i].update({score:0});
            }

        }
    });
});

module.exports = router;