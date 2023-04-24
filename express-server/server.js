const express = require ("express");
const app = express()
    // 1. Endpoint (aka Mount Path)
    // 2. Callback Function (the req and res is short for request and response)
app.get("/", (req, res)=> {
    res.send({name: "Joe", age: 20})
})
// app.put()
// app.post()
// app.delete()



        // 1. Port   2. Callback Function
app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
})