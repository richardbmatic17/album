require('dotenv').config()
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const {
  albums,
  images,
  upload,
  auth,
} = require('./app/routes');

const app = express();
app.disable("x-powered-by");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded());

// parse requests of content-type - application/json
app.use(express.json());

// API's
app.use('/api', auth);
app.use('/api/albums', albums);
app.use('/api/images', images);
app.use('/api/upload', upload);

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port ", process.env.PORT);
});

module.exports.handler = serverless(app);