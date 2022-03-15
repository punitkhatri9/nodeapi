const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  menu_name: {type: String, required: true},
  menu_link: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:Date},
  }
);

const Menu = mongoose.model('menu', MenuSchema);
module.exports = Menu;
