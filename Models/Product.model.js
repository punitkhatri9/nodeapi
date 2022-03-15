const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category_id: {  type: Number, required: true },
  image: { type: String, required: true },
  title:{ type:String,required: true },
  subtitle:	{ type:String,required: true },
  shortdesc	:	{ type:String,required: true },
  desc:	{ type:String,required: true },
  name:	{ type:String,required: true },
  productslug:	{ type:String,required: true },	
  is_active:	{ type:String,required: true },	
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
});



const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
