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
    return queryInterface.bulkInsert('Journal', [
      //Seeds for Cora's ID
      {
        entry_body: 'I had a case of the Mondays.',
        UserId: 1,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        entry_body: 'I had a case of the Tuesdays.',
        UserId: 1,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        entry_body: 'I had a case of the Wednesdays.',
        UserId: 1,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        entry_body: 'Independence Day!.',
        UserId: 1,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        entry_body: 'Happy Friday!',
        UserId: 1,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
      },
      // Seeds for Owais's ID
      {
        entry_body: 'I had a case of the Mondays.',
        UserId: 2,
        createdAt: '2019-07-01 05:00:00',
        updatedAt: '2019-07-01 05:00:00'
      },
      {
        entry_body: 'I had a case of the Tuesdays.',
        UserId: 2,
        createdAt: '2019-07-02 05:00:00',
        updatedAt: '2019-07-02 05:00:00'
      },
      {
        entry_body: 'I had a case of the Wednesdays.',
        UserId: 2,
        createdAt: '2019-07-03 05:00:00',
        updatedAt: '2019-07-03 05:00:00'
      },
      {
        entry_body: 'Independence Day! I almost went to class.',
        UserId: 2,
        createdAt: '2019-07-04 05:00:00',
        updatedAt: '2019-07-04 05:00:00'
      },
      {
        entry_body: 'Happy Friday!',
        UserId: 2,
        createdAt: '2019-07-05 05:00:00',
        updatedAt: '2019-07-05 05:00:00'
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
    return queryInterface.bulkDelete('Journal', null, {});
  }
};
