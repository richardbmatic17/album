const { validateUpload } = require('../../lib/validators');
const { albums } = require('../../models/mysql');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');

module.exports = async (req, res) => {
  const { error } = validateUpload.putObject(req.body);

  if(error) {
    return resError(res, error.details[0].message);
  }

  const filter = { where: { title: req.body.album }};
  const albumDetails = await repo.findByFilter(albums, filter);

  if (!albumDetails) {
    return resError(res, 'Album not found');
  }

  const upload = await repo.fileToS3(req.body, req.files);

  if(!upload) {
    return resError(res, 'Failed inserting image/s');
  }

  return res.status(201).json(resSuccess('Successfully inserted image/s', req.files));
}