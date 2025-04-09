const Feedback = require('../models/feedbackModel');
const { validationResult } = require('express-validator');

// Create new feedback
exports.createFeedback = async (req, res) => {
    try {
        // Validate request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { fullName, email, message } = req.body;

        const feedback = new Feedback({
            fullName,
            email,
            message
        });

        await feedback.save();

        res.status(201).json({
            success: true,
            data: feedback
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating feedback',
            error: error.message
        });
    }
};

// Get all feedbacks with pagination
exports.getFeedbacks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const total = await Feedback.countDocuments();
        const feedbacks = await Feedback.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            success: true,
            count: feedbacks.length,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            data: feedbacks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching feedbacks',
            error: error.message
        });
    }
}; 