const createError = require('http-errors');
const mongoose = require('mongoose');
const Menu = require('../Models/Menu.model');

module.exports = {
  getAllMenu: async (req, res, next) => {
    try {
      const results = await Menu.find({}, { __v: 0 });
      // const results = await Menu.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Menu.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error.message);
    }
  },

  createNewMenu: async (req, res, next) => {
    try {
      console.log('created Menu trigger');
     
      const NewMenu = new Menu(req.body);
      
      const result = await NewMenu.save();
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
  const Menu = new Menu({
    name: req.body.name,
    price: req.body.price
  });
  Menu
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

  findMenuById: async (req, res, next) => {
    const id = req.params.id;
    try {
      const Menu = await Menu.findById(id);
      // const Menu = await Menu.findOne({ _id: id });
      if (!Menu) {
        throw createError(404, 'Menu does not exist.');
      }
      res.send(Menu);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Menu id'));
        return;
      }
      next(error);
    }
  },

  updateAMenu: async (req, res, next) => {
    try {
      const id = req.params.id;
      const updates = req.body;
      const options = { new: true };

      const result = await Menu.findByIdAndUpdate(id, updates, options);
      if (!result) {
        throw createError(404, 'Menu does not exist');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'Invalid Menu Id'));
      }

      next(error);
    }
  },

  deleteAMenu: async (req, res, next) => {
    const id = req.params.id;
    try {
      const result = await Menu.findByIdAndDelete(id);
      //console.log(result);
      if (!result) {
        throw createError(404, 'Menu does not exist.');
      }
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        next(createError(400, 'Invalid Menu id'));
        return;
      }
      next(error);
    }
  }
};
