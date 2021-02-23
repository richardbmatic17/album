require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const {
  albums,
  images
} = require('./app/routes');

const app = express();
app.disable("x-powered-by");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// API's
app.use('/api/albums', albums);
app.use('/api/images', images);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port ", process.env.PORT);
});
