const express = require("express");
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Like, User, Goal } = require('../../db/models');

// 
router.get('/:searchTerm', asyncHandler(async(req, res) => {
//   const searchTerm = req.params.searchTerm
//   const search = await Sequelize.query("SELECT * FROM goals OR users WHERE goals.name = 'demo' OR users.username = 'demo'", { type: QueryTypes.SELECT });

//   return res.json({search})
}));

module.exports = router;