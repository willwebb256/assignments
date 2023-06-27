const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();
const port = 8000;

// Middleware (for every request) //
app.use(express.json())
app.use(morgan('dev'))

// Connect to MongoDB
mongoose.connect('mongodb+srv://williamwebb256:VcDolAuhPKB5r2X5@cluster0.0xeqw1c.mongodb.net/', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true

})
  .then(() => console.log("Connected to the DB"))
  .catch((error) => console.error('Error connecting to the database:', error));

// Morgan logger
app.use(morgan('dev'));

// Middleware to parse JSON
app.use(express.json());

// Set up routes
app.use('/inventory', require('./routes/inventoryRoutes'));

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
