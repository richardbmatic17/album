const jwt = require('jsonwebtoken');
const { validateAuth } = require('../../lib/validators');
const mongodb = require('../../models/mongodb/models');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  // const { error } = validateAuth.login(req.body);

  // if(error) {
  //   return resError(res, error.details[0].message);
  // }

  // const user = { id : 3 };
  // const token = jwt.sign(user, process.env.TOKEN_SECRET, {expiresIn: 30});

  let auth = {};
  try {
    auth = await mongodb.models.Auth.create({
      name: 'Richard Matic',
      email: 'rmatic@stratpoint.com',
      password: '1234'
    })
  } catch (error) {
    return resError(res, error);
  }

  return res.status(201).json(resSuccess('Your account successfuly registered!!!', auth));
}