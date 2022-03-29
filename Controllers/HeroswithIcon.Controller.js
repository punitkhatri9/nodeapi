const createError = require('http-errors');
const mongoose = require('mongoose');
const HeroswithIcon = require('../Models/HeroswithIcon.model');

module.exports = {
  getAllHeroswithIcon: async (req, res, next) => {
    try {
      const results = await HeroswithIcon.find({}, { __v: 0 });
      // const results = await HeroswithIcon.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await HeroswithIcon.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewHeroswithIcon: async (req, res, next) => {
    try {
      console.log('created HeroswithIcon trigger');
     
      const NewHeroswithIcon = new HeroswithIcon(req.body);
      
      const result = await NewHeroswithIcon.save();
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
  const HeroswithIcon = new HeroswithIcon({
    name: req.body.name,
    price: req.body.price
  });
  HeroswithIcon
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

  findHeroswithIconById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const HeroswithIcon = await HeroswithIcon.findById(id);
      // const HeroswithIcon = await HeroswithIcon.findOne({ _id: id });
      if (!HeroswithIcon) {
        throw createError(404, 'HeroswithIcon does not exist.');
      }
      res.send(HeroswithIcon);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid HeroswithIcon id'));
        return;
      }
      next(error);
    }
  },

  updateAHeroswithIcon: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await HeroswithIcon.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'HeroswithIcon does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid HeroswithIcon Id'));
      }

      next(error);
    }
  },

  deleteAHeroswithIcon: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await HeroswithIcon.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'HeroswithIcon does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid HeroswithIcon id'));
        return;
      }
      next(error);
    }
  }
};
