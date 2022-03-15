const express = require('express');
const router = express.Router();

const SubmenuController = require('../Controllers/Submenu.Controller');

//Get a list of all Submenu
router.get('/', SubmenuController.getAllSubmenu);

//Create a new Submenu
router.post('/', SubmenuController.createNewSubmenu);

//Get a Submenu by id
router.get('/:id', SubmenuController.findSubmenuById);

//Update a Submenu by id
router.patch('/:id', SubmenuController.updateASubmenu);

//Delete a Submenu by id
router.delete('/:id', SubmenuController.deleteASubmenu);

module.exports = router;
