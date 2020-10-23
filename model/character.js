const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const characterSchema = new Schema (
    {
        "HP": { type: Number, default: 100 },
        "MadnessLevel": { type: Number, default: 0 },
        "inventory": [{type: Schema.Types.ObjectId, ref: 'Item'}],
        "events": [{type: Schema.Types.ObjectId, ref: 'Events'}],
        "username": {type: String, default: 'some schmuck'},
        "currentRoom": 
    }
)

const Character = mongoose.model('Character', characterSchema)

module.exports = Character