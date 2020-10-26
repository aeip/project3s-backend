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
router.put('/:id', async (req, res) => {
    let scoreboard = await Scoreboard.findOne()
    let player = await Character.findById(req.params.id)
    if (scoreboard.length = 10){
        scoreboard.sort(function(a, b){return b-a})
        if (player.score > scoreboard.players[9].score){
            scoreboard.pop()
            scoreboard.players.push(player)
        } else {
            await Character.findByIdAndDelete(req.params.id)
        }
        res.json(await Scoreboard.findOneAndUpdate(scoreboard))
    } else {
        scoreboard.players.push(player)
        res.json(await Scoreboard.findOneAndUpdate(scoreboard))
    }
    
})

//reset scoreboard
router.delete('/', async (req, res) => {
   await Scoreboard.deleteMany({})
})

module.exports = router