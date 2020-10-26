const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const itemSchema = new Schema (
    {
        "players": [{type: Schema.Types.ObjectId, ref: 'Character'}]
    }
)

const Item = mongoose.model('Item', itemSchema)

module.exports = Item