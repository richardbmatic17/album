const moment = require('moment');

const datetime = moment().format();

const logInfo = data =>  console.log({ type: 'info', datetime, data });
const logError = data =>  console.log({ type: 'error', datetime, data });

module.exports = {
  logInfo,
  logError,
}

