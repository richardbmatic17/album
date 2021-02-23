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
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3)'),
      field: 'created_at',
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
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