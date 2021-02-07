const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal, Like, FollowGoal } = require('../../db/models');


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

// GET ALL GOALS THAT A USER IS FOLLOWING
router.get('/following/goal/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const follows = await FollowGoal.findAll({
      where: { userId},
    });

    return res.json(follows)
  })
);

// GET ALL OF USER'S UNCOMPLETED GOALS
router.get('/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const myGoals = await Goal.findAll({
      where: { userId, completed: false},
      order: [["createdAt", 'DESC']],
    });

    return res.json(myGoals)
  })
);

// GET ALL OF USER'S COMPLETED GOALS
router.get('/completed/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const myGoals = await Goal.findAll({
      where: { userId, completed: true},
      order: [["createdAt", 'DESC']],
    });

    return res.json(myGoals)
  })
);

// CREATE A GOAL
router.post('/create',
  asyncHandler(async (req, res) => {
    const {userId, goalType, startDate} = req.body
    const newGoal = await Goal.create({userId, goalType, startDate})
    await newGoal.save();
    return res.json({ newGoal});
  }));


module.exports = router;