const { images } = require('../../models');
const { validateImage } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const { id } = req.params

  const { error } = validateImage.get({id});

  if(error) {
    return resError(res, error.details[0].message);
  }

  const imageDetails = await repo.findOne(images, id);

  if (!imageDetails) {
    return resError(res, 'Image not found');
  }

  return res.json(resSuccess('Fetched Image', imageDetails));
}