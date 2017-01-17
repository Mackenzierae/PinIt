var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type:String, required:true, minlength: 2, trim: true},
  email: {type:String, required:true, minlength: 8, trim: true},
  password: {type:String, required:true, minlength: 4, trim: true},
  countries: [{type:String}]
},{timestamps:true});


mongoose.model('User', UserSchema)
