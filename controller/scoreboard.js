const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Scoreboard = require('../model/scoreboard')

//get players
router.get('/', async (req, res) => {
    Character.find()
})

//reset scoreboard
router.delete('/', async (req, res) => {
   
})

module.exports = router