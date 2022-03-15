const createError = require('http-errors');
const mongoose = require('mongoose');
const Contactus = require('../Models/Contactus.model');

module.exports = {
  getAllContactus: async (req, res, next) => {
    try {
      const results = await Contactus.find({}, { __v: 0 });
      // const results = await Contactus.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Contactus.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewContactus: async (req, res, next) => {
    try {
      console.log('created Contactus trigger');
     
      const NewContactus = new Contactus(req.body);
      
      const result = await NewContactus.save();
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
  const Contactus = new Contactus({
    name: req.body.name,
    price: req.body.price
  });
  Contactus
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

  findContactusById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Contactus = await Contactus.findById(id);
      // const Contactus = await Contactus.findOne({ _id: id });
      if (!Contactus) {
        throw createError(404, 'Contactus does not exist.');
      }
      res.send(Contactus);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Contactus id'));
        return;
      }
      next(error);
    }
  },

  updateAContactus: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Contactus.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Contactus does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Contactus Id'));
      }

      next(error);
    }
  },

  deleteAContactus: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Contactus.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Contactus does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Contactus id'));
        return;
      }
      next(error);
    }
  }
};
