const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');
const authenticateUser = require('../middleware/authenticateUser');

// Create a new resume
router.post('/resumes', authenticateUser, async (req, res) => {
  try {
    const resume = new Resume(req.body); // create new Resume from request
    await resume.save(); // save to MongoDB
    res.status(201).json({ message: 'Resume created', id: resume._id });
  } catch (err) {
    res.status(500).json({ message: 'Error creating resume', error: err.message });
  }
});

// Get all resumes by user email
router.get('/resumes/:email', authenticateUser, async (req, res) => {
  try {
    const resumes = await Resume.find({ email: req.params.email });
    res.status(200).json(resumes);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resumes', error: err.message });
  }
});

// Get a single resume by ID
router.get('/resume/:id', authenticateUser, async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json(resume);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resume', error: err.message });
  }
});

// Update a resume by ID
router.put('/resume/:id', authenticateUser, async (req, res) => {
  try {
    const updated = await Resume.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json({ message: 'Resume updated', resume: updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating resume', error: err.message });
  }
});

// Delete a resume by ID
router.delete('/resume/:id', authenticateUser, async (req, res) => {
  try {
    const deleted = await Resume.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Resume not found' });
    res.status(200).json({ message: 'Resume deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting resume', error: err.message });
  }
});

module.exports = router;
