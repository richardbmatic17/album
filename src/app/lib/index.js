const resError = require('./resError');
const resSuccess = require('./resSuccess');
const repo = require('./repositories');
const middleware = require('./middleware');
const logger = require('./logger');

module.exports = {
  resError,
  resSuccess,
  repo,
  middleware,
  logger,
}