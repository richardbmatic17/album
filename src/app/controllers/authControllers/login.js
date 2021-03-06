const jwt = require('jsonwebtoken');
const { validateAuth } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const { error } = validateAuth.login(req.body);

  if(error) {
    return resError(res, error.details[0].message);
  }

  const user = { id : 3 };
  const token = jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: 30});

  return res.status(201).json(resSuccess('You are successfully logged in.', token));
}