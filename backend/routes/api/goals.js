const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal, Like, DiaryEntry, Comment } = require('../../db/models');


// CREATE A GOAL
router.post('/create',
  asyncHandler(async (req, res) => {
    const {userId, name, goalType, startDate} = req.body
    const newGoal = await Goal.create({userId, name, goalType, startDate})
    await newGoal.save();
    return res.json({ newGoal});
  }));


// GET ALL OF USER'S UNCOMPLETED GOALS
router.get('/uncompleted/:userId(\\d+)',
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
        {
          model: Comment, include: [{model: User}]
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


//UPDATE GOAL TO COMPLETED
router.put('/put',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    const completedGoal = await Goal.update(
      {completed: true},
      {where: {id: goalId, userId}}
    )

    return res.json(completedGoal)
    
}));


// DELETE A GOAL
router.delete('/delete', asyncHandler(async (req, res) => {
    const { goalId } = req.body;
    const deleteGoal = await Goal.findByPk(goalId);
    const deleteDiaryEntries = await DiaryEntry.findAll({where: {goalId}});

    //delete all diary entries for the goal before deleting goal
    if (deleteDiaryEntries){
      const asyncDeleteEntries = await Promise.all(deleteDiaryEntries.map(async (entry) => {
	      await entry.destroy();
      }));
    }
  
    await deleteGoal.destroy();
    return res.json({ deleteGoal });
}));


module.exports = router;