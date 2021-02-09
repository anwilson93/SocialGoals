'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Goals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' }
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      goalType: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      goalTimes: {
        type: Sequelize.INTEGER
      },
      goalPer: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      public: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      dateCompleted: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Goals');
  }
};