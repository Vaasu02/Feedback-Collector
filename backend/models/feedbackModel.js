const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Full name is required'],
        trim: true,
        minlength: [2, 'Full name must be at least 2 characters long']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
    },
    message: {
        type: String,
        required: [true, 'Feedback message is required'],
        trim: true,
        minlength: [10, 'Feedback message must be at least 10 characters long']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema); 