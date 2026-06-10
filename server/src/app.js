const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Basic health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'success', message: 'API is running' });
});

// Future routes can be imported and used here
// const exampleRoutes = require('./routes/exampleRoutes');
// app.use('/api/example', exampleRoutes);

module.exports = app;