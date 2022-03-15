const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const FooterSchema = new Schema({
  menu_name: {type: String, required: true},
  parent_id: {type: Number, required: true},
  menu_type: {type: String, required: true},
  menu_order: {type: String, required: true},
  menu_page: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
  }
);

const Footer = mongoose.model('footer', FooterSchema);
module.exports = Footer;
