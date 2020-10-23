const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')

//enter character into game
router.get('/', async (req, res) => {
    res.json(await Character.find().populate('Item'))
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

module.exports = router