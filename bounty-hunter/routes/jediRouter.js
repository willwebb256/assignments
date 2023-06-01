const express = require('express')
const jediRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const jedis = [
    {title: "Obi Wan Kenobi", _id: uuidv4()},
    {title: "Mace Windu", _id: uuidv4()},
    {title: "Yoda", _id: uuidv4()},
    {title: "Luke Skywalker", _id: uuidv4()},
    {title: "Sofie Nakamoto", _id: uuidv4()}
]

jediRouter.route("/")
.get((req, res) => {
    res.send(jedis)
})
.post((req, res) => {
    const newJedi = req.body
    newJedi._id = uuidv4()
    jedis.push(newJedi)
    res.send('Successfully added ${newJedi.title} to the database!')
    
});

jediRouter.route("/:id")
  .put((req, res) => {
    const { id } = req.params;
    const updatedJedi = req.body;
    const index = jedis.findIndex(jedi => jedi._id === id);
    if (index !== -1) {
      jedis[index] = { ...jedis[index], ...updatedJedi };
      res.send(`Successfully updated Jedi with ID: ${id}`);
    } else {
      res.status(404).send(`Jedi with ID: ${id} not found`);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    const index = jedis.findIndex(jedi => jedi._id === id);
    if (index !== -1) {
      jedis.splice(index, 1);
      res.send(`Successfully deleted Jedi with ID: ${id}`);
    } else {
      res.status(404).send(`Jedi with ID: ${id} not found`);
    }
  });

module.exports = jediRouter