const express = require('express');
const router = express.Router();

const ContentsController = require('../Controllers/Contents.Controller');

//Get a list of all Contents
router.get('/', ContentsController.getAllContents);

//Create a new Contents
router.post('/', ContentsController.createNewContents);

//Get a Contents by id
router.get('/:id', ContentsController.findContentsById);

//Update a Contents by id
router.patch('/:id', ContentsController.updateAContents);

//Delete a Contents by id
router.delete('/:id', ContentsController.deleteAContents);

module.exports = router;
