'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.hasMany(models.Image, { foreignKey: 'albumid' });
    Album.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Album;
};