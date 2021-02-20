const getPagination = (page = 1, size = 10) => {
  const limit = size;
  const offset = page == 0 ? 0 : (page - 1) * limit;

  return { limit: parseInt(limit, 10), offset: parseInt(offset, 10) };
};

const getTotalPages = (count, limit) =>  Math.ceil(count / limit);

module.exports = {
  getPagination,
  getTotalPages,
}