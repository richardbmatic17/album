const express = require('express');
const router = express.Router();
const multer  = require('multer');
const fs = require('fs');
const fsPromises = fs.promises
const { middleware } = require('../lib');
const {
  getAlbums,
  getAlbum,
  createAlbum,
  updateAlbum,
  deleteAlbum,
} = require('../controllers/albumControllers');

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = `${__dirname}/../../uploads/${file.fieldname}`;
console.log(`\n\n\n req : ${JSON.stringify(req.params)} \n\n\n`);

    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
    }

    cb(null, directory)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

router.use(middleware.routerLogger);

router.post('/:albumId/images', upload.array('images', 20), function (req, res) {
  res.send(req.files)
});

router.get('/:id', getAlbum);

router.get('/', getAlbums);

router.post('/', createAlbum);

router.put('/:id', updateAlbum);

router.delete('/:id', deleteAlbum);

module.exports = router;
