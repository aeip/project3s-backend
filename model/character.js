const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const characterSchema = new Schema (
    {
        "HP": { type: Number, default: 100 },
        "MadnessLevel": { type: Number, default: 0 },
        "inventory": [{type: String}],
        "events": [{type: Schema.Types.ObjectId, ref: 'Event'}],
        "username": {type: String, default: 'username'},
        "password": {type: String, default: 'password'},
        "currentRoom": {type: String, default: 'Foyer'},
        "score": {type: Number, default: 0}
    }
)

const Character = mongoose.model('Character', characterSchema)

module.exports = Character