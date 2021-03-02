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

module.exports = {
  routerLogger,
}