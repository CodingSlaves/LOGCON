var mongoose = require('mongoose');
var schema = mongoose.Schema;

var PlusSchema = new schema({
    nickname:{type:String},
    problems:{type:Array}
});

var PlusModel = mongoose.model('Plus',PlusSchema);
module.exports = PlusModel;