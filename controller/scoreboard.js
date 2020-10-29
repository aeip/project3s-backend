const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Scoreboard = require('../model/scoreboard')

//make scoreboard-- one time only
router.post('/make', async (req, res) => {
    res.json(await Scoreboard.create(req.body))
})

//get players
router.get('/', async (req, res) => {
    res.json(await Scoreboard.find().populate('players'))
})

//Add player to scoreboard
router.put('/:username', async (req, res) => {
    let player = await Character.findOne({username:req.params.username})

    res.json(await Scoreboard.findOneAndUpdate({scoreboard:'scoreboard'}, {$push: {players: player}}))
    
})

//reset scoreboard
router.delete('/', async (req, res) => {
   await Scoreboard.deleteMany({})
})

module.exports = router