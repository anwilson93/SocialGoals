'use strict';
module.exports = (sequelize, DataTypes) => {
  const DiaryEntry = sequelize.define('DiaryEntry', {
    goalId: DataTypes.INTEGER,
    entry: DataTypes.TEXT,
    emotion: DataTypes.STRING,
    public: DataTypes.BOOLEAN
  }, {});
  DiaryEntry.associate = function(models) {
    // associations can be defined here
    DiaryEntry.belongsTo(models.Goal, { foreignKey: 'goalId' });
    DiaryEntry.hasMany(models.Like, { foreignKey: 'diaryEntryId' });
    DiaryEntry.hasMany(models.Comment, { foreignKey: 'diaryEntryId' });
  };
  return DiaryEntry;
};