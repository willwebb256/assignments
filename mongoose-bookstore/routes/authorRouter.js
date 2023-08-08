const express = require('express')
const authorRouter = express.Router()
const Author = require("../models/author.js");
const book = require('../models/book.js');

// Get all authors
authorRouter.get("/", (req, res, next) => {
    Author.find()
      .then(authors => {
        return res.status(200).send(authors);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });
 
  
// Get author(s) by search term
authorRouter.get("/search", async (req, res, next) => {
  try {
    const { author } = req.query;
    const pattern = new RegExp(author, "i");
    const authors = await Author.find({ name: { $regex: pattern } }).exec();

    return res.status(200).send(authors);
  } catch (err) {
    res.status(500);
    return next(err);
  }
});

  

  
// Add new author
authorRouter.post("/", (req, res, next) => {
    const newAuthor = new Author(req.body);
    newAuthor.save()
      .then(savedAuthor => {
        return res.status(201).send(savedAuthor);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });
  

module.exports = authorRouter