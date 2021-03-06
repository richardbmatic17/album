const moment = require('moment');

const routerLogger = (req, res, next) => {
  console.log({
    base_url: req.baseUrl,
    method: req.method,
    headers: req.headers,
    params: req.params,
    query: req.query,
    body: req.body,
  })

  next()
}

const errorLogger = error => {
  console.log({
    date: moment().format(),
    error,
  });
}

module.exports = {
  routerLogger,
  errorLogger,
}