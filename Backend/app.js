const dotenv = require('dotenv');
dotenv.config();

const express = require('express'); // Correct import
const cors = require('cors');
const app = express();
const cookiesParser = require('cookie-parser');
app.use(cors()); // Use CORS middleware

const connectToDB = require('./db/db')

const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes')


app.use(express.urlencoded({extended: true}));
app.use(cookiesParser());
app.use('/maps', mapsRoutes)


connectToDB()

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.json());

// user routes
app.use('/users', userRoutes)

// captaine routes
app.use('/captains', captainRoutes);
















module.exports = app; // Export the app
