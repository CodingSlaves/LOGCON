var mongoose = require('mongoose');
var schema = mongoose.Schema;

var NoticeSchema = new schema({
    title:{type:String},
    script:{type:String},
    time:{type:String}
});

var NoticeModel = mongoose.model('Problem',NoticeSchema);
module.exports = NoticeModel;