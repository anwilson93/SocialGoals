const express = require("express");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User, Goal } = require('../../db/models');

// SEARCH GOALS AND USERS
router.get('/:searchTerm', asyncHandler(async(req, res) => {
    const searchTerm = req.params.searchTerm
    const users = await User.findAll({
    where: {
      [Op.or]: {
      username: {
        [Op.iLike]: `${searchTerm}%`
      },
      }
    },
    });

    const goals = await Goal.findAll({
    where: {
      [Op.or]: {
      name: {
        [Op.iLike]: `%${searchTerm}%`
      },
      goalType: {
        [Op.iLike]: `%${searchTerm}%`
      },
      }
    },
    });

    

  return res.json({users, goals})
}));

module.exports = router;