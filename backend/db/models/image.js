'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    description: DataTypes.TEXT,
    // comment: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.belongsTo(models.User, { foreignKey: 'userId' });
    // Image.belongsTo(models.Album, { foreignKey: 'albumId' });
  };
  return Image;
};
