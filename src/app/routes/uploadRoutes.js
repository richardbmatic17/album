const express = require('express')
const router = express.Router()
const { logger, upload } = require('../lib/middleware');
const {
  uploadImages
} = require('../controllers/uploadControllers');

router.use(logger.routerLogger);

router.post('/', upload.array('images', 20), uploadImages);


module.exports = router;
