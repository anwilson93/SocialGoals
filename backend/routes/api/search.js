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

    const userId = users.map(user => {
        return user.id
    });

    const goals = await Goal.findAll({
    where: {
      userId
    },
    });

    

  return res.json({users, goals})
}));

module.exports = router;