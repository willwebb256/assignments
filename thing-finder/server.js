const express = require('express');
const app = express();
const thingRouter = require("./routes/thingRouter");


// Middleware for every request //
app.use(express.json());


// Routes //
app.use("/things", thingRouter);


// Server Listen //
app.listen(9000, () => {
    console.log('Server listening on port 9000');
  });
  


