const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompareSchema = new Schema({
  
  logo: { type: String, required: true },
  title:{ type:String,required: true },
  rate:	{ type:String,required: true },
  months:	{ type:String,required: true },
  addrate:	{ type:String,required: true },	
  addmonths:	{ type:String,required: true },	
  repayment:	{ type:String,required: true },	
  facility:	{ type:String,required: true },	
  offset:	{ type:String,required: true },	
  rating:	{ type:Number,required: true },	
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
});



const Compare = mongoose.model('compare', CompareSchema);
module.exports = Compare;
