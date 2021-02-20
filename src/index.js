require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const { album } = require('./app/routes');

// create express app
const app = express();
app.disable("x-powered-by");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// API's
app.use('/api/album', album);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port ", process.env.PORT);
});
