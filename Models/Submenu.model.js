const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const SubmenuSchema = new Schema({
  menu_name: {type: String, required: true},
  menu_link: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:Date},
  }
);

const Submenu = mongoose.model('submenu', SubmenuSchema);
module.exports = Submenu;
