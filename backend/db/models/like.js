'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: DataTypes.INTEGER,
    diaryEntryId: DataTypes.INTEGER,
    goalId: DataTypes.INTEGER
  }, {});
  Like.associate = function(models) {
    // associations can be defined here
    Like.belongsTo(models.User, { foreignKey: 'userId' });
    Like.belongsTo(models.Goal, { foreignKey: 'goalId' });
    Like.belongsTo(models.DiaryEntry, { foreignKey: 'diaryEntryId' });
  };
  return Like;
};