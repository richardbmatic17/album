const express = require('express')
const router = express.Router()
const { middleware } = require('../lib');
const {
  getImages,
} = require('../controllers/imageControllers');

router.use(middleware.routerLogger);

router.get('/', getImages);

module.exports = router;
