const { validateUpload } = require('../../lib/validators');
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

  const upload = await repo.fileToS3(req.body, req.files);

  // if(!upload) {
  //   return resError(res, 'Failed inserting image/s');
  // }

  return res.status(201).json(resSuccess('Successfully inserted image/s', req.files));
}