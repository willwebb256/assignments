const express = require('express');
const path = require('path');
const bountyRouter = require('./routes/bountyRouter');
const morgan = require('morgan')

const app = express();
const port = 9000;

//Middleware for every request //
app.use(express.json());
app.use(morgan('dev'))


//Routes //
app.use('/api', bountyRouter);

app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  res.status(404).send('Not found');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
