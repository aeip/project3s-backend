const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')

router.get('/', async (req, res) => {
    res.json(await Item.find())
})

router.post('/', async (req, res) => {
    res.json(await Item.create(req.body))
})

module.exports = router