const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const scoreSchema = new Schema (
    {
        "scoreboard": {type: String, default: 'scoreboard'},
        "players": [{type: String}]
    }
)

const Scoreboard = mongoose.model('Scoreboard', scoreSchema)

module.exports = Scoreboard