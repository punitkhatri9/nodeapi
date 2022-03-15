const createError = require('http-errors');
const mongoose = require('mongoose');

const Form = require('../Models/Form.model');

module.exports = {
  getAllForms: async (req, res, next) => {
    try {
      const results = await Form.find({}, { __v: 0 });
      // const results = await Form.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Form.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewForm: async (req, res, next) => {
    try {
      const NewForm = new Form(req.body);
      const result = await NewForm.save();
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
  const Form = new Form({
    name: req.body.name,
    price: req.body.price
  });
  Form
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

  findFormById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Form = await Form.findById(id);
      // const Form = await Form.findOne({ _id: id });
      if (!Form) {
        throw createError(404, 'Form does not exist.');
      }
      res.send(Form);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Form id'));
        return;
      }
      next(error);
    }
  },

  updateAForm: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Form.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Form does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Form Id'));
      }

      next(error);
    }
  },

  deleteAForm: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Form.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Form does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Form id'));
        return;
      }
      next(error);
    }
  }
};
