const express = require('express')
const router = express.Router()
const Character = require('../model/character')

//enter character into game
router.get('/', async (req, res) => {
    res.json(await Character.find().populate('Item'))
})

//create the character
router.post('/', async (req, res) => {
    res.json(await Character.create(req.body))
})

//add to inventory
router.put('/:id', async (req, res) => {
    
})

module.exports = router