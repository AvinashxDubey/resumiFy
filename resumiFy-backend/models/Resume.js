const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  title: String,
  contactInfo: {
    name: String,
    email: String,
    phone: String,
    linkedin: String,
    github: String,
  },
  summary: String,
  educationList: [Object],
  internships: [Object],
  projects: [Object],
  skills: [String],
  achievements: [String],
  email: {  // Email of the user who created this resume
    type: String,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Resume', resumeSchema);