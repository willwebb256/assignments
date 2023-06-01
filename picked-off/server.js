const express = require('express');
const myMiddleware = require('./myMiddleware');

const app = express();
const port = 3000;

app.use(myMiddleware); // Set up your custom middleware

app.get('/', (req, res) => {
  const responseObject = {
    message: 'Hello from Express!',
    additionalProperty: req.customProperty // Access the custom property set by the middleware
  };
  res.json(responseObject);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
