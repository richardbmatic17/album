const Joi = require('joi');

const login = data => {
  const schema = Joi.object({
    // username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

const register = data => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    name: Joi.string().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

module.exports = {
  login,
  register,
}