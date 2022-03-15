const express = require('express');
const router = express.Router();

const FooterController = require('../Controllers/Footer.Controller');

//Get a list of all Footer
router.get('/', FooterController.getAllFooter);

//Create a new Footer
router.post('/', FooterController.createNewFooter);

//Get a Footer by id
router.get('/:id', FooterController.findFooterById);

//Update a Footer by id
router.patch('/:id', FooterController.updateAFooter);

//Delete a Footer by id
router.delete('/:id', FooterController.deleteAFooter);

module.exports = router;
