const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {  type: String, required: true },
  password: { type: String, required: true },
  email:{ type:String,required: true },
  address:	{ type:String,required: true },
  contact_no	:	{ type:String,required: true },
  gender:	{ type:String,required: true },
  birthdate:	{ type:String,required: true },
  marital_status:	{ type:String,required: true },	
  education:	{ type:String,required: true },	
  residence:	{ type:String,required: true },
  city:	{ type:String,required: true },	
  state:	{ type:String,required: true },	
  pincode:	{ type:String,required: true },	
  residence_type:	{ type:String,required: true },
  isActive:	{ type:String,required: true },
  token:	{ type:String},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:String},
  }
);

const User = mongoose.model('user', UserSchema);
module.exports = User;
