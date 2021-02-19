const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Comment} = require('../../db/models');

// CREATE A COMMENT FOR A GOAL
router.post('/goal/create',
  asyncHandler(async (req, res) => {
    const {userId, goalId, comment} = req.body
    const newComment = await Comment.create({ userId, goalId, comment });
    await newComment.save();
    return res.json({ newComment });
  })
);

// DELETE A COMMENT FOR A GOAL
router.delete('/goal/delete',
  asyncHandler(async (req, res) => {
    const {userId, goalId, comment} = req.body
    const deleteGoalComment = await Comment.findOne({
        where: {userId, goalId, comment}
    });
    await deleteGoalComment.destroy();

    return res.json(deleteGoalComment)
  })
);


module.exports = router;