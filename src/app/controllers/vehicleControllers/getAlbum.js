const { album } = require('../../models');
const { validateAlbum } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const { id } = req.params

  const { error } = validateAlbum.get({id});

  if(error) {
    return resError(res, error.details[0].message);
  }

  const albumDetails = await repo.findOne(album, id);

  if (!albumDetails) {
    return resError(res, 'Album not found');
  }

  return res.json(resSuccess('Fetched album', albumDetails));
}