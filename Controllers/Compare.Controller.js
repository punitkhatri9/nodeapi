const createError = require('http-errors');
const mongoose = require('mongoose');

const Compare = require('../Models/Compare.model');

module.exports = {
  getAllCompares: async (req, res, next) => {
    try {
      const results = await Compare.find({}, { __v: 0 });
      // const results = await Compare.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Compare.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewCompare: async (req, res, next) => {
    try {
      const NewCompare = new Compare(req.body);
      const result = await NewCompare.save();
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
  const Compare = new Compare({
    name: req.body.name,
    price: req.body.price
  });
  Compare
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

  findCompareById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Compare = await Compare.findById(id);
      // const Compare = await Compare.findOne({ _id: id });
      if (!Compare) {
        throw createError(404, 'Compare does not exist.');
      }
      res.send(Compare);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Compare id'));
        return;
      }
      next(error);
    }
  },

  updateACompare: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Compare.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Compare does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Compare Id'));
      }

      next(error);
    }
  },

  deleteACompare: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Compare.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Compare does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Compare id'));
        return;
      }
      next(error);
    }
  }
};
