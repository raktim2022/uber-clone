const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();

// Connect to MongoDB
const connectDB = require('./db/db');
connectDB();


app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;