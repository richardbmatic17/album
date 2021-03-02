const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const putObject = async params => await s3.putObject(params).promise();

module.exports = {
  putObject,
}