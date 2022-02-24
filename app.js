// app.js is the application entry point
// used by Node.js to define and start the application

// Load dependencies
const express = require('express');
const cors = require('cors');

// Define an instance of Express (app)
const app = express();

// Add cors support
app.use(cors());

// Defile the server host IP and port
// This computer is localhost = 127.0.0.1
const HOST = '127.0.0.1';

// if port defined and an environment var, use that value, otherwise 5000
const PORT = process.env.PORT || 5000;

// Application settings
app.use((req, res, next) => {

    // Globally set Content-Type header for the application
    res.setHeader("Content-Type", "application/json");
    next();
}); 

// Allow app to support differnt body content types
app.use(express.text());
// support json encoded bodies
app.use(express.json());
// support url encoded bodies
app.use(express.urlencoded({ extended: true }));

// Routes - Configure app Routes to handle requests from browser
// These will be redirected to a controller
app.use('/', require('./controllers/index'));


// Globally catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found: '+ req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

// Start the HTTP server and listen for requests
app.listen(PORT, HOST, () => {
    console.log(`Express server listening at http://${HOST}:${PORT}`);
  });