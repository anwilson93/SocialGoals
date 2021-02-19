const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Goal, DiaryEntry, Like, User, Comment} = require('../../db/models');


// DELETE A GOAL
router.delete('/goal/:goalId', asyncHandler(async (req, res) => {
    const { goalId } = req.body;
    const deleteGoal = await Goal.findByPk(goalId);
    const deleteDiaryEntries = await DiaryEntry.findAll({where: {goalId}});

    //delete all diary entries for the goal before deleting goal
    if (deleteDiaryEntries){
      const asyncDeleteEntries = await Promise.all(deleteDiaryEntries.map(async (entry) => {
	      await entry.destroy();
      }));
    }
  
    await deleteGoal.destroy();
    return res.json({ deleteGoal });
}));

// // DELETE A DIARY ENTRY
// router.delete('/diary/:diaryEntryId', asyncHandler(async (req, res) => {
//     const { diaryEntryId } = req.body;
//     const deleteEntry = await DiaryEntry.findByPk(diaryEntryId);
//     await deleteEntry.destroy();
//     return res.json({ deleteEntry });
// }));

// DELETE A DIARY LIKE
router.post('/diary/like',
  asyncHandler(async (req, res) => {
    const {userId, diaryEntryId} = req.body
    const deleteDiaryLike = await Like.findOne({
        where: {userId, diaryEntryId}
    });
    await deleteDiaryLike.destroy();
    return res.json({ deleteDiaryLike });

  })
);

// DELETE A GOAL LIKE
router.post('/goal/like',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    const deleteGoalLike = await Like.findOne({
        where: {userId, goalId}
    });
    await deleteGoalLike.destroy();

    const likes = await Like.findAll({
      where: { userId},
      include: [
        {
          model: User,
        },
      ],
    });

    return res.json(likes)
  })
);


module.exports = router;


