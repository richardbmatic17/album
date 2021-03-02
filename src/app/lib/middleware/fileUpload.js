const multer  = require('multer');
const fs = require('fs');

// SET STORAGE
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directory = `${__dirname}/../../../uploads/${file.fieldname}`;

    if (!fs.existsSync(directory)){
      fs.mkdirSync(directory);
    }

    cb(null, directory)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

module.exports = {
  upload,
}