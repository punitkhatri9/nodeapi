const mongoose = require('mongoose');
const { Date } = require('mongoose/lib/schema/index');
const Schema = mongoose.Schema;


const TestimonialSchema = new Schema({
  name: {type: String, required: true},
  imglink: {type: String, required: true},
  title : {type: String, required: true},
  subtitle : {type: String, required: true},
  created_at:	{ type:Date},
  updated_at:	{ type:Date},
  deleted_at:	{ type:Date },
  create_by:	{ type:Date},
  }
);

const Testimonial = mongoose.model('testimonial', TestimonialSchema);
module.exports = Testimonial;
