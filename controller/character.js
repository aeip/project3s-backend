const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')
const Event = require('../model/event')
const { json } = require('express')

//enter character into game
router.get('/', async (req, res) => {
    res.json(await Character.find().populate('inventory').populate('events'))
})

//find by username
router.get('/:username', async (req, res) => {
    res.json( await Character.findOne({username: req.params.username}))
})

//find by username AND password
router.get('/:username/:password', async (req, res) => {
    res.json( await Character.findOne({username: req.params.username, password: req.params.password}))
})

//create the character
router.post('/', async (req, res) => {
    res.json(await Character.create(req.body))
})

//add to inventory
router.put('/:username/:item', async (req, res) => {
    let item = await Item.find({name: req.params.item})
    let person = await Character.findOneAndUpdate({username: req.params.username}, {$push: {inventory: item}})
    res.json(person)
})

//update curent rooom
router.put('/:username/room/:room', async (req, res) => {
    let person = await Character.findOneAndUpdate({username: req.params.username}, {currentRoom: req.params.room})
    res.json(person)
})

//update score
router.put('/:username/score/:score', async (req, res) => {
    let person = await Character.findOneAndUpdate({username: req.params.username}, {score: req.params.score})
    res.json(person)
})

//update health
router.put('/:username/HP/:HP', async (req, res) => {
    let person = await Character.findOneAndUpdate({username: req.params.username}, {health: req.params.HP})
    res.json(person)
})

//update madness
router.put('/:username/madness/:madness', async (req, res) => {
    let person = await Character.findOneAndUpdate({username: req.params.username}, {madness: req.params.madness})
    res.json(person)
})


//delete characters
router.delete('/', async (req, res) => {
    Character.collection.drop();
})

module.exports = router