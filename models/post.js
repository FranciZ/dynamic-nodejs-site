var mongoose = require('mongoose');

var postSchema = mongoose.Schema({

	title		: { type:String, required:true},
	description	: { type:String },
	timeStamp	: { type:Date, default:Date.now },
	url 		: String,
	imageUrl	: String,
    author      : String,
    excerpt     : String

});

mongoose.model('Post', postSchema);