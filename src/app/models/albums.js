'use strict';
module.exports = (sequelize, DataTypes) => {
  const album = sequelize.define('album', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
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
  album.associate = function(models) {
    // associations can be defined here
  };
  return album;
};