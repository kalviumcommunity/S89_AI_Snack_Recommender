const express = require('express');
const router = express.Router();
const Snack = require('../Schema');

// Create a new snack reminder
router.post('/snacks', async (req, res) => {
  try {
    const { name, reminderTime, status } = req.body;
    const snack = new Snack({ name, reminderTime, status });
    await snack.save();
    res.status(201).json(snack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all snack reminders
router.get('/snacks', async (req, res) => {
  try {
    const snacks = await Snack.find();
    res.json(snacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single snack reminder by ID
router.get('/snacks/:id', async (req, res) => {
  try {
    const snack = await Snack.findById(req.params.id);
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json(snack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a snack reminder by ID
router.put('/snacks/:id', async (req, res) => {
  try {
    const snack = await Snack.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json(snack);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a snack reminder by ID
router.delete('/snacks/:id', async (req, res) => {
  try {
    const snack = await Snack.findByIdAndDelete(req.params.id);
    if (!snack) return res.status(404).json({ message: 'Snack not found' });
    res.json({ message: 'Snack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
