const { album } = require('../../models');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const albumList = await repo.find(album, req.query);

  return res.json(resSuccess('Album list', albumList));
}