const awsServices = require('./awsServices');
const searchBuilder = require('./searchBuilder');
const { getPagination, getTotalPages } = require('./pagination');

const create = async (model, data) => await model.create(data);

const destroy = async (model, id) => await model.destroy({ where: { id }});

const findOne = async (model, id) => await model.findOne({ where: { id }});

const update = async (model, params, id) => await model.update(params, { where: { id }});

const find = async (model, query) => {
  const { page, size, ...filters} = query;

  const pagination = getPagination(page, size);
  const search = searchBuilder(model, filters);
  const data =  await model.findAndCountAll({ ...search, ...pagination });

  data.total_pages = getTotalPages(data.count, pagination.limit);

  return data;
}

module.exports = {
  create,
  destroy,
  find,
  findOne,
  update,
  ...awsServices,
}