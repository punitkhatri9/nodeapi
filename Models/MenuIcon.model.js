const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const MenuIconSchema = new Schema({
  title: {type: String, required: true},
  icon: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
  }
);

const MenuIcon = mongoose.model('menuicon', MenuIconSchema);
module.exports = MenuIcon;
