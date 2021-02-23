const express = require('express')
const router = express.Router()
const { middleware } = require('../lib');
const {
  getImage,
  getImages,
} = require('../controllers/imageControllers');

router.use(middleware.routerLogger);


router.get('/:id', getImage);

router.get('/', getImages);

// router.post('/', createAlbum);

// router.put('/:id', updateAlbum);

// router.delete('/:id', deleteAlbum);

module.exports = router;
