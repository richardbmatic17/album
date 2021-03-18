const jwt = require('jsonwebtoken');
const { validateAuth } = require('../../lib/validators');
const mongodb = require('../../models/mongodb/models');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const { error } = validateAuth.register(req.body);

  if(error) {
    return resError(res, error.details[0].message);
  }

  let auth = {};
  try {
    auth = await mongodb.models.Auth.create(req.body)
  } catch (err) {
    return resError(res, err);
  }

  return res.status(201).json(resSuccess('Your account successfuly registered!!!', auth));
}