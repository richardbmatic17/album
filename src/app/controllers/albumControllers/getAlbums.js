const mongodb = require('../../models/mongodb/models');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const albumList = await repo.find(mongodb.models.albums, req.query);

  return res.json(resSuccess('Album list', albumList));
}