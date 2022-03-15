const express = require('express');
const router = express.Router();

const FormController = require('../Controllers/Form.Controller');

//Get a list of all Forms
router.get('/', FormController.getAllForms);

//Create a new Form
router.post('/', FormController.createNewForm);

//Get a Form by id
router.get('/:id', FormController.findFormById);

//Update a Form by id
router.patch('/:id', FormController.updateAForm);

//Delete a Form by id
router.delete('/:id', FormController.deleteAForm);

module.exports = router;
