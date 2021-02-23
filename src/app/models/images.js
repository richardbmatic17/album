'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    name: {
      type: DataTypes.STRING,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    is_hidden: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0,
    },
    created_at: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updated_at: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  }, {
    timestamps: false,
  });
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};