const express = require('express');
const router = express.Router();

const CategoriesController = require('../Controllers/Categories.Controller');

//Get a list of all Categoriess
router.get('/', CategoriesController.getAllCategories);

//Create a new Categories
router.post('/', CategoriesController.createNewCategories);

//Get a Categories by id
router.get('/:id', CategoriesController.findCategoriesById);

//Update a Categories by id
router.patch('/:id', CategoriesController.updateACategories);

//Delete a Categories by id
router.delete('/:id', CategoriesController.deleteACategories);

module.exports = router;
