const express = require('express');
const router = express.Router();
const { logger } = require('../lib/middleware');
const {
  login,
  register,
} = require('../controllers/authControllers');

router.use(logger.routerLogger);

router.post('/login', login);
router.get('/register', register);

module.exports = router;
