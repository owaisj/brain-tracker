/* eslint-disable */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Sleep', [
      //Seeds for Cora's ID
      {
        sleep_time: 7,
        UserId: 1,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        sleep_time: 7,
        UserId: 1,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        sleep_time: 8,
        UserId: 1,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        sleep_time: 7,
        UserId: 1,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        sleep_time: 8,
        UserId: 1,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
      },
      // Seeds for Owais's ID
      {
        sleep_time: 6,
        UserId: 2,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        sleep_time: 6,
        UserId: 2,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        sleep_time: 6,
        UserId: 2,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        sleep_time: 6,
        UserId: 2,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        sleep_time: 6,
        UserId: 2,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sleep', null, {});
  }
};
