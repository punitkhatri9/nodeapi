const express = require('express');
const router = express.Router();

const TestimonialController = require('../Controllers/Testimonial.Controller');

//Get a list of all Testimonial
router.get('/', TestimonialController.getAllTestimonial);

//Create a new Testimonial
router.post('/', TestimonialController.createNewTestimonial);

//Get a Testimonial by id
router.get('/:id', TestimonialController.findTestimonialById);

//Update a Testimonial by id
router.patch('/:id', TestimonialController.updateATestimonial);

//Delete a Testimonial by id
router.delete('/:id', TestimonialController.deleteATestimonial);

module.exports = router;
