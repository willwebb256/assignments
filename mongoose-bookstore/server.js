
require('dotenv').config();
const express = require('express')
const app = express()
const morgan = require("morgan")
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))




mongoose.connect(process.env.MONGODB_ATLAS_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
    .then(() => console.log("Connected to the DB"))
    .catch((error) => console.error('Error connecting to the database:', error));
  

    app.use("/books", require("./routes/bookRouter.js"))
    app.use("/authors", require('./routes/authorRouter.js'))

    app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
    })

    app.listen(9000, () => {
        console.log("Server is running on port 9000")
    })