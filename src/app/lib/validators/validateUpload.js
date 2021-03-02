const Joi = require('joi');

const putObject = data => {
  const schema = Joi.object({
    album: Joi.string().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

module.exports = {
  putObject,
}