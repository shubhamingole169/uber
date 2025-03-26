const dotenv = require('dotenv');
dotenv.config();

const express = require('express'); // Correct import
const cors = require('cors');
const app = express();
const cookiesParser = require('cookie-parser');
app.use(cors()); // Use CORS middleware

const connectToDB = require('./db/db')

const userRoutes = require('./routes/user.routes')


app.use(express.urlencoded({extended: true}));
app.use(cookiesParser());


connectToDB()

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());
app.use('/users', userRoutes)
















module.exports = app; // Export the app
