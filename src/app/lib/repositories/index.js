const awsServices = require('./awsServices');
const searchBuilder = require('./searchBuilder');
const { getPagination, getTotalPages } = require('./pagination');
const { logError } = require('../logger');

const create = async (model, data) => {
  try {
    return await model.create(data)
  } catch (error) {
    logError(error);
    return error
  }
};

const destroy = async (model, id) => await model.destroy({ where: { id }});

const findOne = async (model, _id) => await model.findOne({ where: { _id }});

const findById = async (model, _id) => await model.findById(_id);

const findByFilter = async (model, filter) => await model.findOne(filter);

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
  findByFilter,
  findById,
  ...awsServices,
}