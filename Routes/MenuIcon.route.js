const express = require('express');
const router = express.Router();

const MenuIconController = require('../Controllers/MenuIcon.Controller');

//Get a list of all MenuIcon
router.get('/', MenuIconController.getAllMenuIcon);

//Create a new MenuIcon
router.post('/', MenuIconController.createNewMenuIcon);

//Get a MenuIcon by id
router.get('/:id', MenuIconController.findMenuIconById);

//Update a MenuIcon by id
router.patch('/:id', MenuIconController.updateAMenuIcon);

//Delete a MenuIcon by id
router.delete('/:id', MenuIconController.deleteAMenuIcon);

module.exports = router;
