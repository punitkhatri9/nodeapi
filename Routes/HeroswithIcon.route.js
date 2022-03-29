const express = require('express');
const router = express.Router();

const HeroswithIconController = require('../Controllers/HeroswithIcon.Controller');

//Get a list of all HeroswithIcon
router.get('/', HeroswithIconController.getAllHeroswithIcon);

//Create a new HeroswithIcon
router.post('/', HeroswithIconController.createNewHeroswithIcon);

//Get a HeroswithIcon by id
router.get('/:id', HeroswithIconController.findHeroswithIconById);

//Update a HeroswithIcon by id
router.patch('/:id', HeroswithIconController.updateAHeroswithIcon);

//Delete a HeroswithIcon by id
router.delete('/:id', HeroswithIconController.deleteAHeroswithIcon);

module.exports = router;
