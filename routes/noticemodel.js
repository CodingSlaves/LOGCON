var mongoose = require('mongoose');
var schema = mongoose.Schema;

var NoticeSchema = new schema({
    title:{type:String},
    script:{type:String},
    time:{type:String},
    notice:{type:Boolean}
});

var NoticeModel = mongoose.model('Notice',NoticeSchema);
module.exports = NoticeModel;
