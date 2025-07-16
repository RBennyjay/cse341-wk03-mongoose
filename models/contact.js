const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    minlength: 2
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    minlength: 2
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
  },
  favoriteColor: {
    type: String
  },
  birthday: {
    type: Date
  }
});

module.exports = mongoose.model('Contact', contactSchema);
