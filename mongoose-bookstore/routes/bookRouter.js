const express = require('express')
const bookRouter = express.Router()
const Book = require("../models/book.js")

// Get all books
bookRouter.get("/", (req, res, next) => {
    Book.find()
      .then(books => {
        return res.status(200).send(books);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });

// Get by Author
bookRouter.get("/:authorID", (req, res, next) => {
    Book.find({ author: req.params.authorID })
      .then(books => {
        return res.status(200).send(books);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });  

// Add new book
bookRouter.post("/:authorID", (req, res, next) => {
    req.body.author = req.params.authorID
    const newBook = new Book(req.body);
    newBook.save()
      .then(savedBook => {
        return res.status(201).send(savedBook);
      })
      .catch(err => {
        res.status(500);
        return next(err);
      });
  });
  

module.exports = bookRouter