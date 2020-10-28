const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const characterSchema = new Schema (
    {
        "HP": { type: Number, default: 100 },
        "MadnessLevel": { type: Number, default: 0 },
        "inventory": Array,
        "events": [{type: Schema.Types.ObjectId, ref: 'Event'}],
        "username": {type: String, default: 'some schmuck'},
        "currentRoom": {type: String, default: 'Foyer'},
        "score": {type: Number, default: 0}
    }
)

const Character = mongoose.model('Character', characterSchema)

module.exports = Character