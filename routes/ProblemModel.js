var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProblemSchema = new schema({
    title:{type:String},
    answer:{type:String},
    score:{type:Number},
    pnumber:{type:Number}
});

var ProblemModel = mongoose.model('Problem',ProblemSchema);
module.exports = ProblemModel;