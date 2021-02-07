const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal, Like, FollowGoal, DiaryEntry } = require('../../db/models');

// GET ALL DIARY ENTRIES FOR GOALS THAT A PERSON IS FOLLOWING
router.get('/following/:userId',
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
          model: Goal,
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


// FIND ALL OF MY DIARY ENTRIES
router.get('/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const myDiaryEntries = await Goal.findAll({
      where: { userId},
      include: [
        {
          model: DiaryEntry,
        },
      ],
    });
    return res.json(myDiaryEntries)
  })
);

// CREATE A DIARY ENTRY
router.post('/create',
  asyncHandler(async (req, res) => {
    const {userId, goalId, entry} = req.body
    const newDiary = await DiaryEntry.create({goalId, entry})
    await newDiary.save();
    const myDiaryEntries = await Goal.findAll({
      where: { userId},
      include: [
        {
          model: DiaryEntry,
        },
      ],
    });

    return res.json({ myDiaryEntries});
  }));

module.exports = router;