const express = require('express')
const thingRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const things = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4(),
      },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4(),
      },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4(),
      },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4(),
      },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4(),
      },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4(),
      },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4(),
      }
];

thingRouter.route("/")
.get((req, res) => {
    const { type } = req.query;
    if (type) {
      const filteredThings = things.filter(item => item.genre === type);
      res.send(filteredThings);
    } else {
      res.send(things);
    }
})
.post((req, res) => {
    const newThing = req.body
    newThing._id = uuidv4()
    things.push(newThing)
    res.send(`Successfully added ${newThing.name} to the database!`)
});

thingRouter.route("/type")
  .get((req, res) => {
    const { type } = req.query;
    if (type) {
      const filteredThings = things.filter(item => item.type === type);
      res.send(filteredThings);
    } else {
      res.send(things);
    }
  });



module.exports = thingRouter;