const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, FollowGoal, Follower, Goal } = require('../../db/models');


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
    res.json({ following });
  })
);

// CREATE FOLLOW FOR A GOAL
router.post('/:goalId(\\d+)',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    //CHECK IF GOAL EXISTS
    const goalExists = await Goal.findOne({
        where: {id: goalId}
    });

    if (goalExists){
        const follow = await FollowGoal.create({goalId, userId})
        await follow.save();
        return res.json({ follow });
    }
  })
);

// CREATE USER FOLLOW ANOTHER USER
router.post('/user',
  asyncHandler(async (req, res) => {
    const {followerId, usernameToFollow} = req.body

    // FIND USER BY USERNAME
    const user = await User.findOne({
        where: {
          username: usernameToFollow
        }
    });

    if (user){
     
      const userId = user.id
      // CREATE IT
      const follow = await Follower.create({userId, followerId})
      await follow.save();
      return res.json({ follow });
    }
    
  })
);


// DELETE FOLLOW FOR A USER
router.post('/unfollow/user',
  asyncHandler(async (req, res) => {
    const {followerId, usernameToUnfollow} = req.body

    // FIND USER BY USERNAME
    const user = await User.findOne({
        where: {
          username: usernameToUnfollow
        }
    });
    if (user) {
      const userId = user.id
      let unfollow = await Follower.destroy({
            where: {followerId, userId}
        })
        return res.json({unfollow})
    }
    
  })
);


// GET ALL GOALS THAT A USER IS FOLLOWING
router.get('/goal/:userId(\\d+)',
  asyncHandler(async (req, res) => {
    const userId = req.params.userId;
    const follows = await FollowGoal.findAll({
      where: { userId},
    });

    return res.json(follows)
  })
);

module.exports = router;