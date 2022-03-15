const createError = require('http-errors');
const mongoose = require('mongoose');
const MenuIcon = require('../Models/MenuIcon.model');

module.exports = {
  getAllMenuIcon: async (req, res, next) => {
    try {
      const results = await MenuIcon.find({}, { __v: 0 });
      // const results = await MenuIcon.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await MenuIcon.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewMenuIcon: async (req, res, next) => {
    try {
      console.log('created MenuIcon trigger');
     
      const NewMenuIcon = new MenuIcon(req.body);
      
      const result = await NewMenuIcon.save();
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
  const MenuIcon = new MenuIcon({
    name: req.body.name,
    price: req.body.price
  });
  MenuIcon
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

  findMenuIconById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const MenuIcon = await MenuIcon.findById(id);
      // const MenuIcon = await MenuIcon.findOne({ _id: id });
      if (!MenuIcon) {
        throw createError(404, 'MenuIcon does not exist.');
      }
      res.send(MenuIcon);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid MenuIcon id'));
        return;
      }
      next(error);
    }
  },

  updateAMenuIcon: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await MenuIcon.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'MenuIcon does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid MenuIcon Id'));
      }

      next(error);
    }
  },

  deleteAMenuIcon: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await MenuIcon.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'MenuIcon does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid MenuIcon id'));
        return;
      }
      next(error);
    }
  }
};
