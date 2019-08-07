/* eslint-disable */
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mood', [
      //Seeds for Cora's ID
      {
        mood_value: 1,
        UserId: 1,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        mood_value: 2,
        UserId: 1,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        mood_value: 4,
        UserId: 1,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        mood_value: 5,
        UserId: 1,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        mood_value: 5,
        UserId: 1,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
      },
      // Seeds for Owais's ID
      {
        mood_value: 1,
        UserId: 2,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        mood_value: 3,
        UserId: 2,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        mood_value: 3,
        UserId: 2,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        mood_value: 5,
        UserId: 2,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        mood_value: 5,
        UserId: 2,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mood', null, {});
  }
};
