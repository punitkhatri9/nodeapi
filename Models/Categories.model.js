const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const CatergoriesSchema = new Schema({
  name: {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:Date},
  }
);

const Catergories = mongoose.model('catergories', CatergoriesSchema);
module.exports = Catergories;
