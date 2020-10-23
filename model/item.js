const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const itemSchema = new Schema (
    {
        "name": String,
        "description": String
    }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item