var mongoose = require('mongoose');
var schema = mongoose.Schema;

var ProblemSchema = new schema({
    string:{type:String},
    pnumber:{type:Number},
    answer:{type:String},
    score:{type:Number}
});

var ProblemModel = mongoose.model('Problem',ProblemSchema);
module.exports = ProblemModel;