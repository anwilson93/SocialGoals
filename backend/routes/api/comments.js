const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Comment, User } = require('../../db/models');

// GET ALL COMMENTS FOR A GOAL
router.get('/:goalId',
  asyncHandler(async (req, res) => {
    const goalId = req.params.goalId;
    const comments = await Comment.findAll({
      where: { goalId},
      include: [
        {
          model: User,
        },
      ],
    });

    return res.json(comments)
  })
);


// router.post('/:goalId',
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

module.exports = router;