const Joi = require('joi');

const login = data => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

module.exports = {
  login,
}