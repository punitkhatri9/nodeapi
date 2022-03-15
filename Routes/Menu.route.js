const express = require('express');
const router = express.Router();

const MenuController = require('../Controllers/Menu.Controller');

//Get a list of all Menu
router.get('/', MenuController.getAllMenu);

//Create a new Menu
router.post('/', MenuController.createNewMenu);

//Get a Menu by id
router.get('/:id', MenuController.findMenuById);

//Update a Menu by id
router.patch('/:id', MenuController.updateAMenu);

//Delete a Menu by id
router.delete('/:id', MenuController.deleteAMenu);

module.exports = router;
