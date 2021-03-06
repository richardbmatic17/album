const jwt = require('jsonwebtoken');
const { validateAuth } = require('../../lib/validators');
const mongodb = require('../../models/mongodb/models');
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

  const  auth = await mongodb.models.auths.findOne(req.body);
 
  if (!auth) {
    return resError(res, 'Invalid email or password!');
  } 
 
  const token = jwt.sign({...auth._doc}, process.env.TOKEN_SECRET, {expiresIn: 30000});

  return res.status(201).json(resSuccess('You are successfully logged in.', token));
}