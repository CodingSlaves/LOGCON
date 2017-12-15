var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProblemSchema = new schema({
    title:{type:String},
    answer:{type:String},
    score:{type:Number},
    flag:{type:String}
});

var ProblemModel = mongoose.model('Problem',ProblemSchema);
module.exports = ProblemModel;