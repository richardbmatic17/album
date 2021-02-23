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
  }, {});
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};