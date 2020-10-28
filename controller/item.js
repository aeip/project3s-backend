const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')
const itemData = require('../db/itemData.json')

//get all items
router.get('/', async (req, res) => {
    res.json(await Item.find())
})

//find one
router.get('/:name', async (req, res) => {
    res.json(await Item.findOne(req.params.name))
})

//make item
router.post('/', async (req, res) => {
    res.json(await Item.create(req.body))
})

//seed items
router.post('/seed', async (req, res) => {
    res.json(await Item.create(itemData))
})

//delete all
router.delete('/', async (req, res) => {
    res.json(await Item.deleteMany())
})

module.exports = router