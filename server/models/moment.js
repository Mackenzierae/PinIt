var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//comment Schema
var MomentSchema = new mongoose.Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _country: {type: Schema.Types.ObjectId, ref: 'Country'},
  who: {type: String, required:true, minlength:2},
  when: {type: String, required:true, minlength:2},
  where: {type: String, required:true, minlength:2},
  what: {type: String, required:true, minlength:2},
},{timestamps:true});

mongoose.model('Moment', MomentSchema);
// var Comment = mongoose.model('Comment', CommentSchema);
