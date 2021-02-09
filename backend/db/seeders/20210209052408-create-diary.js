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

    return queryInterface.bulkInsert('DiaryEntries', [
      {
        goalId: 1,
        entry: "Started App Academy and I'm really exited to start learning!"
      },
      {
        goalId: 2,
        entry: "I had my first drum lesson today. It was awesome! My drum teacher is really cool and down to earth."
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('DiaryEntries', null, {});
  }
};
