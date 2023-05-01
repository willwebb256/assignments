const express = require ("express");
const app = express()
const { v4: uuidv4 } = require('uuid');


// Middleware for every request: //

app.use(express.json()) //Looks fora request body, and turns it into a 'req.body'

//Fake Data //
const movies = [
    {title: "die hard", genre: "action", _id: uuidv4()},
    {title: "star wars IV", genre: "fantasy", _id: uuidv4()},
    {title: "lion king", genre: "fantasy", _id: uuidv4()},
    {title: "friday the 13th", genre: "horror", _id: uuidv4()}
]

    // 1. Endpoint (aka Mount Path)
    // 2. Callback Function (the req and res is short for request and response)
app.get("/movies", (req, res)=> {
    res.send(movies)
})

app.post("/movies", (req, res) => {
    const newMovie = req.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    res.send('Successfully added ${newMovie.title} to the database!')
})

// app.put()
// app.delete()



        // 1. Port   2. Callback Function
app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
})