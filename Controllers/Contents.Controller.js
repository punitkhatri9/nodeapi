const createError = require('http-errors');
const mongoose = require('mongoose');
const Contents = require('../Models/Contents.model');

module.exports = {
  getAllContents: async (req, res, next) => {
    try {
      const results = await Contents.find({}, { __v: 0 });
      // const results = await Contents.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Contents.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewContents: async (req, res, next) => {
    try {
      const NewContents = new Contents(req.body);
      const result = await NewContents.save();
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
  const Contents = new Contents({
    name: req.body.name,
    price: req.body.price
  });
  Contents
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

  findContentsById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Contents = await Contents.findById(id);
      // const Contents = await Contents.findOne({ _id: id });
      if (!Contents) {
        throw createError(404, 'Contents does not exist.');
      }
      res.send(Contents);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Contents id'));
        return;
      }
      next(error);
    }
  },

  updateAContents: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Contents.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Contents does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Contents Id'));
      }

      next(error);
    }
  },

  deleteAContents: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Contents.findByIdAndDelete(id);
      // console.log(result);
      if (!result) {
        throw createError(404, 'Contents does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Contents id'));
        return;
      }
      next(error);
    }
  }
};
