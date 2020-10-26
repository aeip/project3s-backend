const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const eventSchema = new Schema (
    {
        "name": String,
        "hasHappened": Boolean
    }
)

const Event = mongoose.model('Event', eventSchema)

module.exports = Event