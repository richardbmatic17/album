const { albums } = require('../../models/mysql');
const { validateAlbum } = require('../../lib/validators');
const {
  resError,
  resSuccess,
  repo,
} = require('../../lib');


module.exports = async (req, res) => {
  const { error } = validateAlbum.create(req.body);

  if(error) {
    return resError(res, error.details[0].message);
  }

  const createdAlbum = await repo.create(albums, req.body);

  if(!createdAlbum) {
    return resError(res, 'Failed creating album');
  }

  return res.status(201).json(resSuccess('Successfully created album', createdAlbum));
}