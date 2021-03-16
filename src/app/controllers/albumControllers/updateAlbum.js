const { albums } = require('../../models/mysql');
const { validateAlbum } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const params = req.body;
  const { id } = req.params

  const { error } = validateAlbum.update({ ...params, id });
  
  if(error) {
    return resError(res, error.details[0].message);
  }

  const updateAlbum = await repo.update(albums, params, id);

  if(JSON.stringify(updateAlbum) === '[0]') {
    return resError(res, 'Updating album failed!!!');
  }

  const albumDetails = await repo.findOne(albums, id);

  if (!albumDetails) {
    return resError(res, 'Album not found');
  }

  return res.json(resSuccess('Successfully updated album.', albumDetails));
}