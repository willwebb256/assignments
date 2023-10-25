const express = require("express");
const entryRouter = express.Router();
const Entry = require('../models/entry.js');

// Get All Entries
entryRouter.get("/", async (req, res, next) => {
  try {
    const entries = await Entry.find();
    return res.status(200).send(entries);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Get entries by user id
entryRouter.get("/user", async (req, res, next) => {
  try {
    const entries = await Entry.find({ user: req.auth._id });
    return res.status(200).send(entries);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Add new Entry
entryRouter.post("/", async (req, res, next) => {
  try {
    req.body.user = req.auth._id;
    const newEntry = await new Entry(req.body).save();
    return res.status(201).send(newEntry);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Delete Entry
entryRouter.delete("/:entryId", async (req, res, next) => {
  try {
    const deletedEntry = await Entry.findOneAndDelete({
      _id: req.params.entryId,
      user: req.auth._id
    });
    return res.status(200).send(`Successfully deleted entry: ${deletedEntry.title}`);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

// Update Entry
entryRouter.put("/:entryId", async (req, res, next) => {
  try {
    const updatedEntry = await Entry.findOneAndUpdate(
      { _id: req.params.entryId, user: req.auth._id },
      req.body,
      { new: true }
    );
    return res.status(201).send(updatedEntry);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

module.exports = entryRouter;
