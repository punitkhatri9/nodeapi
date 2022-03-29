const createError = require('http-errors');
const mongoose = require('mongoose');
const Testimonial = require('../Models/Testimonial.model');

module.exports = {
  getAllTestimonial: async (req, res, next) => {
    try {
      const results = await Testimonial.find({}, { __v: 0 });
      // const results = await Testimonial.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Testimonial.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewTestimonial: async (req, res, next) => {
    try {
      console.log('created Testimonial trigger');
     
      const NewTestimonial = new Testimonial(req.body);
      
      const result = await NewTestimonial.save();
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error.name === 'ValidationError') {
        next(createError(422, error.message));
        return;
      }
      next(error);
    }

    /*Or:
  If you want to use the Promise based approach*/
    /*
  const Testimonial = new Testimonial({
    name: req.body.name,
    price: req.body.price
  });
  Testimonial
    .save()
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(err => {
      console.log(err.message);
    }); 
    */
  },

  findTestimonialById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Testimonial = await Testimonial.findById(id);
      // const Testimonial = await Testimonial.findOne({ _id: id });
      if (!Testimonial) {
        throw createError(404, 'Testimonial does not exist.');
      }
      res.send(Testimonial);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Testimonial id'));
        return;
      }
      next(error);
    }
  },

  updateATestimonial: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Testimonial.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Testimonial does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Testimonial Id'));
      }

      next(error);
    }
  },

  deleteATestimonial: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Testimonial.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Testimonial does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Testimonial id'));
        return;
      }
      next(error);
    }
  }
};
