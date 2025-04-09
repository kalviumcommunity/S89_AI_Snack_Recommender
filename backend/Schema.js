const mongoose = require('mongoose');

const SnackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  reminderTime: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
}, { timestamps: true });

module.exports = mongoose.model('Snack', SnackSchema);
