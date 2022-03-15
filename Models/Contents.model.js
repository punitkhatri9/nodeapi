const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContentsSchema = new Schema({
  pagename: {  type: String, required: true },
  title:{ type:String,required: true },
  keyword:	{ type:String,required: true },
  shortdesc	:	{ type:String,required: true },
  desc:	{ type:String,required: true },
  pageslug:	{ type:String,required: true },	
  url:	{ type:String,required: true },	
  is_active:	{ type:String,required: true },	
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
});



const Contents = mongoose.model('contents', ContentsSchema);
module.exports = Contents;
