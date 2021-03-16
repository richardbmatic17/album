const { images } = require('../../models/mysql');
const { validateImage } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');


module.exports = async (req, res) => {
  const { error } = validateImage.create(req.body);

  if(error) {
    return resError(res, error.details[0].message);
  }

  const image = await repo.create(images, req.body);

  if(!image) {
    return resError(res, 'Failed inserting image/s');
  }

  return res.status(201).json(resSuccess('Successfully inserted image/s', image));
}