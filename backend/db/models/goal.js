'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goal = sequelize.define('Goal', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    goalType: DataTypes.STRING,
    goalTimes: DataTypes.INTEGER,
    goalPer: DataTypes.STRING,
    startDate: DataTypes.DATE,
    public: DataTypes.BOOLEAN,
    completed: DataTypes.BOOLEAN,
    dateCompleted: DataTypes.DATE
  }, {});
  Goal.associate = function(models) {
    // associations can be defined here
    Goal.belongsTo(models.User, { foreignKey: 'userId' });

    const columnMapping = {
    through: 'FollowGoal', 
    otherKey: 'userlId',
    foreignKey: 'goalId'
    }

    Goal.belongsToMany(models.User, columnMapping);

    Goal.hasMany(models.DiaryEntry, { foreignKey: 'goalId' });
    Goal.hasMany(models.Like, { foreignKey: 'goalId' });
    Goal.hasMany(models.Comment, { foreignKey: 'goalId' });

  };
  return Goal;
};