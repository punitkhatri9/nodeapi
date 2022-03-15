const express = require('express');
const router = express.Router();

const ContactusController = require('../Controllers/Contactus.Controller');

//Get a list of all Contactuss
router.get('/', ContactusController.getAllContactus);

//Create a new Contactus
router.post('/', ContactusController.createNewContactus);

//Get a Contactus by id
router.get('/:id', ContactusController.findContactusById);

//Update a Contactus by id
router.patch('/:id', ContactusController.updateAContactus);

//Delete a Contactus by id
router.delete('/:id', ContactusController.deleteAContactus);

module.exports = router;
