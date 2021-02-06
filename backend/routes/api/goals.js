const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal, Like } = require('../../db/models');


// GET ALL GOALS FOR USERS THAT A PERSON IS FOLLOWING
router.get('/following/:username',
  asyncHandler(async (req, res) => {
    const username = req.params.username;
    const user = await User.findOne({
      where: { username},
      include: [
        {
          model: User,
          as: "Following",
        },
      ],
    });

    const followingId = user.Following.map(eachFollowedPerson => {
        return eachFollowedPerson.id
    });
   
    const followedPersonGoals = await Goal.findAll({
      where: {userId: followingId, completed: false},
      include: [
        {
          model: User,
        },
        {
          model: Like,
        },
      ],
      order: [["createdAt", 'DESC']],

    });

    const goals = followedPersonGoals.map(eachFollowedPerson => {
        return eachFollowedPerson.dataValues
    });
    res.json({ goals });
  })
);

module.exports = router;