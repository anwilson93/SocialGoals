const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Like, User } = require('../../db/models');

// GET ALL LIKES FOR A USER
router.get('/user/:userId',
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

// CREATE LIKE FOR A GOAL
router.post('/goal',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
  
    const like = await Like.create({goalId, userId})
    await like.save();
    return res.json({ like });
  })
);

// CREATE LIKE FOR A DIARY
router.post('/diary',
  asyncHandler(async (req, res) => {
    const {userId, diaryEntryId} = req.body
    const like = await Like.create({diaryEntryId, userId})
    await like.save();
    return res.json({ like });
  })
);




module.exports = router;