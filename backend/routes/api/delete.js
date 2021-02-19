const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Goal, DiaryEntry, Like, User, Comment} = require('../../db/models');



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


