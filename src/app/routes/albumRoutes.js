const express = require('express')
const router = express.Router()
const { middleware } = require('../lib');
const {
  getAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../controllers/vehicleControllers');

router.use(middleware.routerLogger);

router.get('/:id', getAlbum)

router.get('/', getAlbums)

router.post('/', createAlbum)

router.put('/:id', updateAlbum)

router.delete('/:id', deleteAlbum)

module.exports = router;
