const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal } = require('../../db/models');
const sequelize = require('sequelize')

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
      where: {userId: followingId},
      include: [
        {
          model: User,
        },
      ],
      order: [["createdAt", 'DESC']],
      // attributes: [[sequelize.fn('date_format', sequelize.col('startDate'), '%Y %m %d'), 'startDate']]

    });

    const goals = followedPersonGoals.map(eachFollowedPerson => {
        return eachFollowedPerson.dataValues
    });
    res.json({ goals });
  })
);

module.exports = router;