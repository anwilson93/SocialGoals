'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: DataTypes.INTEGER,
    goalId: DataTypes.INTEGER,
    diaryEntryId: DataTypes.INTEGER,
    comment: DataTypes.TEXT
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' });
    Comment.belongsTo(models.Goal, { foreignKey: 'goalId' });
    Comment.belongsTo(models.DiaryEntry, { foreignKey: 'diaryEntryId' });
  };
  return Comment;
};