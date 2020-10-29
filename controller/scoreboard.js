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
    let score = await Scoreboard.findOne()
    console.log(score)
    if (score.players.length === 10 && score.players.indexOf(player) < 0){
       score.players.sort(function(a, b){return b-a})
       if(player.score > score.players[9]){
           let removed = score.players[9]
           await Scoreboard.findOneAndUpdate({scoreboard:'scoreboard'}, {$pop: {players: removed}})
           res.json(await Scoreboard.findOneAndUpdate({scoreboard:'scoreboard'}, {$push: {players: player}}))
       }
    }else if(score.players.indexOf(player) < 0){
        res.json(await Scoreboard.findOneAndUpdate({scoreboard:'scoreboard'}, {$push: {players: player}}))
    } else {
        res.json({status: 200})
    }
    
    
})

//reset scoreboard
router.delete('/', async (req, res) => {
   await Scoreboard.deleteMany({})
})

module.exports = router