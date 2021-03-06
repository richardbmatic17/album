const express = require('express');
const router = express.Router();
const { logger } = require('../lib/middleware');
const {
  login,
} = require('../controllers/authControllers');

router.use(logger.routerLogger);

router.post('/login', login);

module.exports = router;
