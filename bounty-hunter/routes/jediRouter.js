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
    
})

module.exports = jediRouter