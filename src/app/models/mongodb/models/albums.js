'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    title: {
      type: String,
      required: 'Email field is required!',
      unique: true,
      dropDups: true,
      index: { unique: true }
    },
    description: {
      type: String,
    },
    isHidden: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  }, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  });
  const albums = mongoose.model('albums', newSchema);
  return albums;
};