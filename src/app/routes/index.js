const albums = require('./albumRoutes');
const images = require('./imageRoutes');
const upload = require('./uploadRoutes');
const auth = require('./authRoutes');

module.exports = {
  albums,
  images,
  upload,
  auth,
}