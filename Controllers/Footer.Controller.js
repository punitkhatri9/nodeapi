const createError = require('http-errors');
const mongoose = require('mongoose');
const Footer = require('../Models/Footer.model');

module.exports = {
  getAllFooter: async (req, res, next) => {
    try {
      const results = await Footer.find({}, { __v: 0 });
      // const results = await Footer.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Footer.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewFooter: async (req, res, next) => {
    try {
      console.log('created Footer trigger');
     
      const NewFooter = new Footer(req.body);
      
      const result = await NewFooter.save();
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
  const Footer = new Footer({
    name: req.body.name,
    price: req.body.price
  });
  Footer
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

  findFooterById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Footer = await Footer.findById(id);
      // const Footer = await Footer.findOne({ _id: id });
      if (!Footer) {
        throw createError(404, 'Footer does not exist.');
      }
      res.send(Footer);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Footer id'));
        return;
      }
      next(error);
    }
  },

  updateAFooter: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Footer.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Footer does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Footer Id'));
      }

      next(error);
    }
  },

  deleteAFooter: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Footer.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Footer does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Footer id'));
        return;
      }
      next(error);
    }
  }
};
