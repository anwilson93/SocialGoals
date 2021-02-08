'use strict';
module.exports = (sequelize, DataTypes) => {
  const FollowGoal = sequelize.define('FollowGoal', {
    userId: DataTypes.INTEGER,
    goalId: DataTypes.INTEGER
  }, {});
  FollowGoal.associate = function(models) {
    // associations can be defined here
  };
  return FollowGoal;
};