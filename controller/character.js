const express = require('express')
const router = express.Router()
const Character = require('../model/character')

router.get('/create', async (req, res) => {
    res.json(await Character.find().populate('Item'))
})

module.exports = router