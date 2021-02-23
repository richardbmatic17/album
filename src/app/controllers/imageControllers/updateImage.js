const { images } = require('../../models');
const { validateImage } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const params = req.body;
  const { id } = req.params

  const { error } = validateImage.update({ ...params, id });
  
  if(error) {
    return resError(res, error.details[0].message);
  }

  const updateAlbum = await repo.update(images, params, id);

  if(JSON.stringify(updateAlbum) === '[0]') {
    return resError(res, 'Updating album failed!!!');
  }

  const albumDetails = await repo.findOne(images, id);

  if (!albumDetails) {
    return resError(res, 'Image not found');
  }

  return res.json(resSuccess('Successfully updated Image.', albumDetails));
}