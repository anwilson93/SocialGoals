const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal, FollowGoal, DiaryEntry } = require('../../db/models');

// CREATE A DIARY ENTRY FOR AN UNCOMPLETED GOAL
router.post('/create',
  asyncHandler(async (req, res) => {
    const {userId, goalId, entry} = req.body
    const newDiary = await DiaryEntry.create({goalId, entry})
    await newDiary.save();
    const myDiaryEntries = await Goal.findAll({
      where: { userId, completed:false},
      include: [
        {
          model: DiaryEntry,
        },
      ],
    });

    return res.json({ myDiaryEntries});
}));


// GET ALL OF MY DIARY ENTRIES FOR UNCOMPLETED GOALS
router.get('/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const myDiaryEntries = await Goal.findAll({
      where: { userId, completed:false},
      include: [
        {
          model: DiaryEntry,
        },
      ],
    });
    return res.json(myDiaryEntries)
  })
);


// GET ALL DIARY ENTRIES FOR GOALS THAT A PERSON IS FOLLOWING
router.get('/following/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    // FIND ALL FOLLOWED GOALS
    const followGoals = await FollowGoal.findAll({
      where: { userId}
    });

    // GET ALL FOLLOWED GOALS' IDS
    const goalId = followGoals.map(goal => {
        return goal.goalId
    });

    // FIND ALL DIARY ENTRIES BY GOAL ID
    const followedGoalsDiaries = await DiaryEntry.findAll({
      where: {goalId},
      include: [
        {
          model: Goal, include: [{model: User}]
        },
      ],
      order: [["createdAt", 'DESC']],

    });

    const diaries = followedGoalsDiaries.map(eachFollowedGoal => {
        return eachFollowedGoal.dataValues
    });
    res.json({ diaries });
  })
);


// DELETE A DIARY ENTRY
router.delete('/delete/:diaryEntryId(\\d+)', asyncHandler(async (req, res) => {
    const { diaryEntryId } = req.body;
    const deleteEntry = await DiaryEntry.findByPk(diaryEntryId);
    await deleteEntry.destroy();
    return res.json({ deleteEntry });
}));

module.exports = router;