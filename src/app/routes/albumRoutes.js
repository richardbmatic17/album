const express = require('express');
const router = express.Router();
const { logger, verifyToken } = require('../lib/middleware');
const {
  getAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../controllers/albumControllers');

router.use(logger.routerLogger);
router.use(verifyToken);

router.get('/:id', getAlbum);

router.get('/', getAlbums);

router.post('/', createAlbum);

router.put('/:id', updateAlbum);

router.delete('/:id', deleteAlbum);

module.exports = router;
