const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Inventory = require('../models/inventoryModel');


// GET all items
router.get('/', (req, res, next) => {
  Inventory.find()
    .then((items) => {
      res.status(200).send(items);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// GET a single item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST a new item
router.post('/', (req, res, next) => {
  const newItem = new Inventory(req.body);
  newItem.save()
    .then((savedItem) => {
      res.status(201).send(savedItem);
    })
    .catch((err) => {
      res.status(500);
      return next(err);
    });
});

// PUT (update) an item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// DELETE an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await Inventory.findByIdAndRemove(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;


