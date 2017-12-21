var mongoose = require('mongoose');
var schema = mongoose.Schema;

var UserSchema =  new schema({
    nickname:{type:String},
    password:{type:String},
    score:{type:Number},
    email:{type:String},
    school:{type:String},
    id:{type:String},
    URL:{type:String},
    verification:{type:Boolean},
    grade:{type:Boolean},
    problems:{type:Array}
});

var model=mongoose.model('User',UserSchema);
module.exports = model;