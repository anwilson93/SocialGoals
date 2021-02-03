const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');


// GET ALL FOLLOWERS FOR A USER AND RETURNS THE FOLLOWERS' USERNAMES
router.get('/followers/:username',
  asyncHandler(async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({
      where: { username },
      include: [
        {
          model: User,
          as: "Followers",
        },
      ],
    });
    const followers = user.Followers.map(eachFollower => {
        return eachFollower.username
    });
    res.json({ followers });
  })
);

// GET ALL THE USERNAMES OF PEOPLE THAT A USER FOLLOWS
router.get('/following/:username',
  asyncHandler(async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({
      where: { username },
      include: [
        {
          model: User,
          as: "Following",
        },
      ],
    });
    const following = user.Following.map(eachFollowedPerson => {
        return eachFollowedPerson.username
    });
    console.log(user.Following)
    res.json({ following });
  })
);

module.exports = router;