const { images } = require('../../models/mysql');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const albumList = await repo.find(images, req.query);

  return res.json(resSuccess('Album list', albumList));
}