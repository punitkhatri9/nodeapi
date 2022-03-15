const createError = require('http-errors');
const mongoose = require('mongoose');
const Submenu = require('../Models/Submenu.model');

module.exports = {
  getAllSubmenu: async (req, res, next) => {
    try {
      const results = await Submenu.find({}, { __v: 0 });
      // const results = await Submenu.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Submenu.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewSubmenu: async (req, res, next) => {
    try {
      console.log('created Submenu trigger');
     
      const NewSubmenu = new Submenu(req.body);
      
      const result = await NewSubmenu.save();
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
  const Submenu = new Submenu({
    name: req.body.name,
    price: req.body.price
  });
  Submenu
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

  findSubmenuById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Submenu = await Submenu.findById(id);
      // const Submenu = await Submenu.findOne({ _id: id });
      if (!Submenu) {
        throw createError(404, 'Submenu does not exist.');
      }
      res.send(Submenu);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Submenu id'));
        return;
      }
      next(error);
    }
  },

  updateASubmenu: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Submenu.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Submenu does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Submenu Id'));
      }

      next(error);
    }
  },

  deleteASubmenu: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Submenu.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Submenu does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Submenu id'));
        return;
      }
      next(error);
    }
  }
};
