'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: {
      type: String,
      required: 'Name field is required!'
    },
    email: {
      type: String,
      required: 'Email field is required!',
      unique: true,
      dropDups: true,
      index: { unique: true }
    },
    password: {
      type: String,
      required: 'Password field is required!'
    }
  }, {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  });
  const Auth = mongoose.model('Auth', newSchema);
  return Auth;
};