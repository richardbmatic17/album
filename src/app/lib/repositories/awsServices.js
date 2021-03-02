const fs = require('fs');
const { s3 } = require('../aws');

const fileToS3 = async (body, files) => {
  return files.map(async fileData => {
    const readFile = fs.readFileSync(fileData.path);

    if (!readFile) {
      console.log('Unable to read file!!!');
    }

    const params = {
      Bucket: `${process.env.S3_BUCKET}/${body.album}`,
      Key: fileData.filename,
      Body: Buffer.from(readFile, 'binary'),
      ContentType: fileData.mimetype,
      ACL: 'public-read'
    }

    const fileUpload = await s3.putObject(params);

    if (!fileUpload) {
      console.log('Failed uploading to S3');
    }

    console.log('Successfully uploaded file');

    return fileUpload;
  });
}

module.exports = {
  fileToS3,
}