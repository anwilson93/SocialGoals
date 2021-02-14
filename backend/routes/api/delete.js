const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Goal, DiaryEntry, Like, User, Comment} = require('../../db/models');


// DELETE A GOAL
router.delete('/goal/:goalId', asyncHandler(async (req, res) => {
    const { goalId } = req.body;
    const deleteGoal = await Goal.findByPk(goalId);
    await deleteGoal.destroy();
    return res.json({ deleteGoal });
}));

// DELETE A DIARY ENTRY
router.delete('/diary/:diaryEntryId', asyncHandler(async (req, res) => {
    const { diaryEntryId } = req.body;
    const deleteEntry = await DiaryEntry.findByPk(diaryEntryId);
    await deleteEntry.destroy();
    return res.json({ deleteEntry });
}));

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


// DELETE A GOAL COMMENT
router.post('/goal/comment',
  asyncHandler(async (req, res) => {
    const {userId, goalId, comment} = req.body
    const deleteGoalComment = await Comment.findOne({
        where: {userId, goalId, comment}
    });
    await deleteGoalComment.destroy();

    return res.json(deleteGoalComment)
  })
);


module.exports = router;


