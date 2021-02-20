const moment = require('moment');

module.exports = (message, data = null) => {
  const res = {
    message,
  }

  if (data) {
    res.data = data;
  }

  console.log({
    datetime: moment().format(),
    data: res,
  });

  return res;
}
