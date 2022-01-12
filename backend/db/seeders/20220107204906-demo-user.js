'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Users', [
    {
      email: 'demo@user.io',
      username: 'Demo-lition',
      hashedPassword: bcrypt.hashSync('password')
     },
     {
      email: 'fakedemo@user.io',
      username: 'Demofaker',
      hashedPassword: bcrypt.hashSync('password')
     },
     {
      email: 'anotherfakedemo@user.io',
      username: 'thirdDemo',
      hashedPassword: bcrypt.hashSync('password')
     },
     {
      email: 'Adventr@adventr.com',
      username: 'Adventr',
      hashedPassword: bcrypt.hashSync('password123')
     },

   ], {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      // username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
