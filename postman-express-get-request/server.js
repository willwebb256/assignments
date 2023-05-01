const express = require ("express");
const app = express()
    // 1. Endpoint (aka Mount Path)
    // 2. Callback Function (the req and res is short for request and response)


// Practice Data

const users = [
    {name: "joe", age: 20},
    {name: "jill", age: 21},
    {name: "james", age: 29},
    {name: "jaqueen", age: 30},
    {name: "jeremiah", age: 53}
]
app.get("/", (req, res)=> {
    res.send(users)
})
// app.put()
// app.post()
// app.delete()



        // 1. Port   2. Callback Function
app.listen(9000, ()=> {
    console.log("The server is running on Port 9000")
})