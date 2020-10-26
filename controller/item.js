const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')

//get all items
router.get('/', async (req, res) => {
    res.json(await Item.find())
})

//make item
router.post('/', async (req, res) => {
    res.json(await Item.create(req.body))
})

module.exports = router