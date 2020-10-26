const express = require('express')
const router = express.Router()
const Character = require('../model/character')
const Item = require('../model/item')

router.delete('/', async (req, res) => {
    await Character.deleteMany()
    await Item.deleteMany()
})

module.exports = router