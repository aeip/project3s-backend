const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')
const Event = require('../model/event')

//enter character into game
router.get('/', async (req, res) => {
    res.json(await Character.find().populate('inventory').populate('events'))
})

router.get('/:username', async (req, res) => {
    res.json( await Character.findOne({username: req.params.username}))
})

//create the character
router.post('/', async (req, res) => {
    res.json(await Character.create(req.body))
})

//add to inventory
router.put('/:id/:item', async (req, res) => {
    console.log(req.params)
    let person = await Character.findById(req.params.id)
    let item = await Item.find({name: req.params.item})
    person.inventory.push(item)
    res.json(person)
})

//update character
router.put('/:username', async (req, res) => {
    let person = await Character.findOne({ username: req.params.username });
    res.json(await Character.findOneAndUpdate(person), req.body);
})

module.exports = router