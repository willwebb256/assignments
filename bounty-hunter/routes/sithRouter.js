const express = require('express')
const sithRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const siths = [
    {title: "Anakin Skywalker", _id: uuidv4()},
    {title: "Darth Sidious", _id: uuidv4()},
    {title: "Darth Maul", _id: uuidv4()},
    {title: "Darth Tyranus", _id: uuidv4()},
    {title: "Darth Libra", _id: uuidv4()}
]

sithRouter.route("/")
.get((req, res) => {
    res.send(siths)
})
.post((req, res) => {
    const newSith = req.body
    newSith._id = uuidv4()
    siths.push(newSith)
    res.send('Successfully added ${newSith.title} to the database!');
    
});

sithRouter.route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const updatedSith = req.body;
    const index = siths.findIndex(sith => sith._id === id);
    if (index !== -1) {
      siths[index] = { ...siths[index], ...updatedSith };
      res.send(`Successfully updated Sith with ID: ${id}`);
    } else {
      res.status(404).send(`Sith with ID: ${id} not found`);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    const index = siths.findIndex(sith => sith._id === id);
    if (index !== -1) {
      siths.splice(index, 1);
      res.send(`Successfully deleted Sith with ID: ${id}`);
    } else {
      res.status(404).send(`Sith with ID: ${id} not found`);
    }
  });

module.exports = sithRouter