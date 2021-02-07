const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Goal} = require('../../db/models');


// DELETE A GOAL
router.delete('/goal/:goalId', asyncHandler(async (req, res) => {
    const { goalId } = req.body;
    const deleteGoal = await Goal.findByPk(goalId);
    await deleteGoal.destroy();
    return res.json({ deleteGoal });
}));

module.exports = router;


