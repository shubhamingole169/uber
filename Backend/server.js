const http = require('http'); // Import the HTTP module
const app = require('./app'); // Import the Express app
const port = process.env.PORT || 3000; // Define the port

const server = http.createServer(app); // Create an HTTP server with the Express app

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
