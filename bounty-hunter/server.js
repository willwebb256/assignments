const express = require('express');
const app = express();


// Middleware for every request //
app.use(express.json());


// Routes //
app.use("/siths", require("./routes/sithRouter.js"))
app.use("/jedis", require("./routes/jediRouter.js"))

// Server Listen //
app.listen(9000, () => {
    console.log('Server listening on port 9000');
  });
  


