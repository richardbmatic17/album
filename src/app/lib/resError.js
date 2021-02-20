const moment = require('moment');

module.exports = (res, error, data = null, status = 400) => {
  const response = {
    error,
  }

  if (data) {
    response.data = data;
  }

  console.log({
    datetime: moment().format(),
    data: response,
  });

  return res.status(status).json(response);
}
