const { images } = require('../../models/mysql');
const { validateImage } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');


module.exports = async (req, res) => {
  const { id } = req.params

  const { error } = validateImage.destroy({id});
  
  if(error) {
    return resError(res, error.details[0].message);
  }

  const destroyedAlbum = await repo.destroy(images, id);

  if(!destroyedAlbum) {
    return resError(res, 'Album deletion failed!!!');
  }

  return res.status(200).json(resSuccess('Successfully deleted album'));
}