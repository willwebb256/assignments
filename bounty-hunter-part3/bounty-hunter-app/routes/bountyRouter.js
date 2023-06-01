const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

// Array to store bounty data
const bounties = [
  {
    firstName: "Obi",
    lastName: "Wan Kenobi",
    living: true,
    bountyAmount: 100000,
    type: "Jedi",
    _id: uuidv4()
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: false,
    bountyAmount: 500000,
    type: "Sith",
    _id: uuidv4()
  },
  // Add more bounties as needed
];

bountyRouter.route('/bounties')
  .get((req, res) => {
    res.send(bounties);
  })
  
  .post((req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.status(201).send(`New bounty added with ID: ${newBounty._id}`);
  });

  
bountyRouter.route('/bounties/:id')
  .put((req, res) => {
    const { id } = req.params;
    const updatedBounty = req.body;
    const index = bounties.findIndex(bounty => bounty._id === id);
    if (index !== -1) {
      bounties[index] = { ...bounties[index], ...updatedBounty };
      res.send(`Bounty with ID ${id} updated successfully.`);
    } else {
      res.status(404).send(`Bounty with ID ${id} not found.`);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    const index = bounties.findIndex(bounty => bounty._id === id);
    if (index !== -1) {
      bounties.splice(index, 1);
      res.send(`Bounty with ID ${id} deleted successfully.`);
    } else {
      res.status(404).send(`Bounty with ID ${id} not found.`);
    }
  });

module.exports = bountyRouter;


