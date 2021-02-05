const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Like, User } = require('../../db/models');

// GET ALL COMMENTS FOR A GOAL
// router.get('/:goalId',
//   asyncHandler(async (req, res) => {
//     const goalId = req.params.goalId;
//     const comments = await Comment.findAll({
//       where: { goalId},
//       include: [
//         {
//           model: User,
//         },
//       ],
//     });

//     return res.json(comments)
//   })
// );

// CREATE A COMMENT
router.post('/:goalId(\\d+)',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body

    const deleteLike = await Like.findOne({
        where: {goalId, userId}
    })

    console.log(deleteLike)



    // const newComment = await Comment.create({ userId, goalId, comment });
    // await newComment.save();
    return res.json({ deleteLike });
  })
);


module.exports = router;