const dotenv = require('dotenv');
dotenv.config();

const express = require('express'); // Correct import
const cors = require('cors');

const app = express(); // Fix: Initialize `app` properly

app.use(cors()); // Use CORS middleware

const connectToDB = require('./db/db')


connectToDB()

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = app; // Export the app
