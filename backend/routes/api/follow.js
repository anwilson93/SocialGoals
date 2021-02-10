const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, FollowGoal, Follower } = require('../../db/models');


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

// CREATE OR DELETE FOLLOW FOR A GOAL
router.post('/:goalId(\\d+)',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    let follow;
    //CHECK IF FOLLOW ALREADY EXISTS
    const deleteFollow = await FollowGoal.findOne({
        where: {goalId, userId}
    });

    // IF IT DOESN'T EXIST, CREATE IT. ELSE DELETE IT
    if (deleteFollow === null){
        const follow = await FollowGoal.create({goalId, userId})
        await follow.save();
        return res.json({ follow });
    } else {
        FollowGoal.destroy({
            where: {goalId, userId}
        })
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

module.exports = router;