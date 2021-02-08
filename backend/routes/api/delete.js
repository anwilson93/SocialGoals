const express = require("express");
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Goal, DiaryEntry} = require('../../db/models');


// DELETE A GOAL
router.delete('/goal/:goalId', asyncHandler(async (req, res) => {
    const { goalId } = req.body;
    const deleteGoal = await Goal.findByPk(goalId);
    await deleteGoal.destroy();
    return res.json({ deleteGoal });
}));

// DELETE A DIARY ENTRY
router.delete('/diary/:diaryEntryId', asyncHandler(async (req, res) => {
    const { diaryEntryId } = req.body;
    const deleteEntry = await DiaryEntry.findByPk(diaryEntryId);
    await deleteEntry.destroy();
    return res.json({ deleteEntry });
}));

module.exports = router;


