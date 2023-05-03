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
    
})

module.exports = sithRouter