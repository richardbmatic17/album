var sequelize = require('sequelize');

module.exports = (model, filters) => {
  const resp = { where : {}};

  // filter column
  if (filters.attributes) {
    // TODO: create a protected column filters per model
    // using model.getTableName()
    resp.attributes = filters.attributes.split(',')
  }

  // set ordering
  if (filters.orderBy) {
    resp.order = sequelize.literal(filters.orderBy);
  }

  return resp;
}