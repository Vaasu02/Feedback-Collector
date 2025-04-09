const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const feedbackController = require('../controllers/feedbackController');

// Validation middleware
const feedbackValidation = [
    body('fullName')
        .trim()
        .isLength({ min: 2 })
        .withMessage('Full name must be at least 2 characters long'),
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email'),
    body('message')
        .trim()
        .isLength({ min: 10 })
        .withMessage('Feedback message must be at least 10 characters long')
];

// Routes
router.post('/', feedbackValidation, feedbackController.createFeedback);
router.get('/', feedbackController.getFeedbacks);

module.exports = router; 