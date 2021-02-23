const Joi = require('joi');

// const create = data => {
//   const schema = Joi.object({
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//   });

//   const result = schema.validate(data);
//   console.log({data, result})

//   return result;
// }

const get = data => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

const destroy = data => {
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  const result = schema.validate(data);
  console.log({data, result})

  return result;
}

// const update = data => {
//   const schema = Joi.object({
//     id: Joi.number().required(),
//     title: Joi.string().required(),
//     description: Joi.string().required(),
//   });

//   const result = schema.validate(data);
//   console.log({data, result})

//   return result;
// }

module.exports = {
  // create,
  get,
  destroy,
  // update,
}