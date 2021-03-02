const express = require('express')
const router = express.Router()
const { logger } = require('../lib/middleware');
const {
  createImage,
  getImage,
  getImages,
  updateImage,
  deleteImage,
} = require('../controllers/imageControllers');

router.use(logger.routerLogger);


router.get('/:id', getImage);

router.get('/', getImages);

router.post('/', createImage);

router.put('/:id', updateImage);

router.delete('/:id', deleteImage);

module.exports = router;
