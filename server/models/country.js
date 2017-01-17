var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mapSchema
var CountrySchema = new mongoose.Schema({
  _user: [{type: Schema.Types.ObjectId, ref: 'User'}],
  countryID: {type:String, required:true, trim:true},
  name: {type:String, required:true, trim:true},
  continent:{type:String, required:true, trim:true},
  // moments: [{type:Schema.Types.ObjectId, ref:'Moment'}] moved this to USER
},{timestamps:true});

mongoose.model('Country', CountrySchema);
