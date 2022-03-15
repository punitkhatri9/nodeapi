const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const ContactusSchema = new Schema({
  email:	{ type:String,required: true },
  phone:	{ type:Number },
  message:	{ type:String,required: true },	
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
  }
);


const Contactus = mongoose.model('contactus', ContactusSchema);
module.exports = Contactus;
