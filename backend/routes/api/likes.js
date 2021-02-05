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

// CREATE OR DELETE LIKE
router.post('/:goalId(\\d+)',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    let like;
    //CHECK IF LIKE ALREADY EXISTS
    const deleteLike = await Like.findOne({
        where: {goalId, userId}
    });

    // IF IT DOESN'T EXIST, CREATE IT. ELSE DELETE IT
    if (deleteLike === null){
        const like = await Like.create({goalId, userId})
        await like.save();
        return res.json({ like });
    } else {
        Like.destroy({
            where: {goalId, userId}
        })
    }
  })
);


module.exports = router;