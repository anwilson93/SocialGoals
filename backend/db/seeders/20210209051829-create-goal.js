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

     return queryInterface.bulkInsert('Goals', [
       {
         userId: 1,
         name: 'Finish App Academy',
         goalType: 'academic',
         startDate: new Date(),
         public: true
       },
       {
         userId: 2,
         name: 'Learn to play drums',
         goalType: 'passion',
         startDate: new Date(),
         public: true
       }
     ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Goals', null, {});
  }
};
