'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Auth = mongoose.model('Auth', newSchema);
  return Auth;
};