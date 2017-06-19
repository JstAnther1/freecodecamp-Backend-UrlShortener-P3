var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema ({
    APIIndexPage: String,
    URL: String
});

module.exports = mongoose.model('UrlCollection',UrlSchema); 