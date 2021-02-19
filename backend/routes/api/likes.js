const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Like, User } = require('../../db/models');


// CREATE A LIKE FOR A GOAL
router.post('/goal/create',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
  
    const like = await Like.create({goalId, userId})
    await like.save();
    return res.json({ like });
  })
);


// DELETE A LIKE FOR A GOAL
router.delete('/goal/delete',
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


// CREATE LIKE FOR A DIARY
router.post('/diary/create',
  asyncHandler(async (req, res) => {
    const {userId, diaryEntryId} = req.body
    const like = await Like.create({diaryEntryId, userId})
    await like.save();
    return res.json({ like });
  })
);


// DELETE A DIARY LIKE
router.delete('/diary/delete',
  asyncHandler(async (req, res) => {
    const {userId, diaryEntryId} = req.body
    const deleteDiaryLike = await Like.findOne({
        where: {userId, diaryEntryId}
    });
    await deleteDiaryLike.destroy();
    return res.json({ deleteDiaryLike });

  })
);


// GET ALL LIKES FOR A USER
router.get('/all/:userId',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
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