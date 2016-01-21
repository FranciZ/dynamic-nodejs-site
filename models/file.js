var mongoose = require('mongoose');

var fileSchema = mongoose.Schema({

    filename    : String,
    dateTime    : { type:Date, default:Date.now },
    path        : String

});

var myFile = mongoose.model('File', fileSchema);