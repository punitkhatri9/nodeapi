const createError = require('http-errors');
const mongoose = require('mongoose');
const Categories = require('../Models/Categories.model');

module.exports = {
  getAllCategories: async (req, res, next) => {
    try {
      const results = await Categories.find({}, { __v: 0 });
      // const results = await Categories.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Categories.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewCategories: async (req, res, next) => {
    try {
      console.log('created Categories trigger');
     
      const NewCategories = new Categories(req.body);
      
      const result = await NewCategories.save();
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
  const Categories = new Categories({
    name: req.body.name,
    price: req.body.price
  });
  Categories
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

  findCategoriesById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Categories = await Categories.findById(id);
      // const Categories = await Categories.findOne({ _id: id });
      if (!Categories) {
        throw createError(404, 'Categories does not exist.');
      }
      res.send(Categories);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Categories id'));
        return;
      }
      next(error);
    }
  },

  updateACategories: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Categories.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Categories does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Categories Id'));
      }

      next(error);
    }
  },

  deleteACategories: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Categories.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Categories does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Categories id'));
        return;
      }
      next(error);
    }
  }
};
