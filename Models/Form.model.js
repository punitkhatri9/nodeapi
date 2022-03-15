const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FormSchema = new Schema({
  category_id:	{ type:String,required: true },
  product_id:	{ type:Number },
  formname:	{ type:String,required: true },	
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
});



const Form = mongoose.model('form', FormSchema);
module.exports = Form;
