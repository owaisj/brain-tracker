/* eslint-disable */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('User', [
      {
        email: 'cora@testdb.com',
        password: 'owaisj',
        bio: 'fiance',
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        email: 'owais@testdb.com',
        password: 'owaisj',
        bio: 'developer',
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('User', null, {});
  }
};
