const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;


const HeroswithIconSchema = new Schema({
  title : {type: String, required: true},
  subtitle : {type: String, required: true},
  reverse: {type: String, required: true},
  bgcol: {type: String, required: true},
  imglink: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String },
  }
);

const HeroswithIcon = mongoose.model('heroswithicon', HeroswithIconSchema);
module.exports = HeroswithIcon;
