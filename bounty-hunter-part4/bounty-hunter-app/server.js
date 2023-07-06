require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const port = 8000;

console.log(process.env.MONGODB_ATLAS_URL); // Print the value of MONGODB_ATLAS_URL

// Middleware (for every request) //
app.use(express.json())

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_ATLAS_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(() => console.log("Connected to the DB"))
  .catch((error) => console.error('Error connecting to the database:', error));

// Morgan logger
app.use(morgan('dev'));

// Set up routes
app.use('/api/inventory', require('./routes/inventoryRoutes'));

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
