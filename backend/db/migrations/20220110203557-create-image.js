'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users'
        },
        allowNull: false,

      },
      // albumId: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'Albums'
      //   },
      //   allowNull: true,
      // },
      imageUrl: {
        type: Sequelize.STRING(500)
      },
      description: {
        type: Sequelize.STRING(500)
      },
      // comments: {
      //   type: Sequelize.TEXT(500)
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Images');
  }
};
