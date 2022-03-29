const express = require('express');
const router = express.Router();

const CompareController = require('../Controllers/Compare.Controller');

//Get a list of all Compares
router.get('/', CompareController.getAllCompares);

//Create a new Compare
router.post('/', CompareController.createNewCompare);

//Get a Compare by id
router.get('/:id', CompareController.findCompareById);

//Update a Compare by id
router.patch('/:id', CompareController.updateACompare);

//Delete a Compare by id
router.delete('/:id', CompareController.deleteACompare);

module.exports = router;
