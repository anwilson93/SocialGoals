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

// CREATE OR DELETE LIKE
router.post('/:goalId(\\d+)',
  asyncHandler(async (req, res) => {
    const {userId, goalId} = req.body
    let like;
    //CHECK IF LIKE ALREADY EXISTS
    const deleteLike = await Like.findOne({
        where: {goalId, userId}
    });

    // IF IT DOESN'T EXIST, CREATE IT. ELSE DELETE IT
    if (deleteLike === null){
        const like = await Like.create({goalId, userId})
        await like.save();
        return res.json({ like });
    } else {
        Like.destroy({
            where: {goalId, userId}
        })
    }

    
    
  })
);


module.exports = router;