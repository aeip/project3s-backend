const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const scoreSchema = new Schema (
    {
        "scoreboard": {type: String, default: 'scoreboard'},
        "players": [{type: Schema.Types.ObjectId, ref: 'Character'}]
    }
)

const Scoreboard = mongoose.model('Scoreboard', scoreSchema)

module.exports = Scoreboard