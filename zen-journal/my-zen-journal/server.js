const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt');
const crypto = require('crypto');

// Function to generate a secret key
const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

app.use(express.json());
app.use(morgan('dev'));

// Use async/await to connect to the database
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_ATLAS_URL);
    console.log('Connected to the DB');
  } catch (error) {
    console.error('Error connecting to the DB:', error);
  }
};

// Call the database connection function
connectToDatabase();

app.use('/auth', require('./routes/authRouter.js'));
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }));
app.use('/api/entry', require('./routes/entryRouter.js'));
// app.use('/api/comments', require('./routes/commentRouter.js'));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log('Server is running on local port 9000');
});
