const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const SubmenuSchema = new Schema([{
  name: {type: String, required: true},
  link: {type: String, required: true}
}]);

const MenuSchema = new Schema({
  name: {type: String, required: true},
  link: {type: String, required: true},
  submenu: [SubmenuSchema],
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:Date},
  }
);

const Menu = mongoose.model('menu', MenuSchema);
module.exports = Menu;
