require('dotenv').config()
const mongoose = require('mongoose')
const {MONGODBURI} = process.env
const config = { useUnifiedTopology: true, useNewUrlParser: true}
const db = mongoose.connection

mongoose.connect(MONGODBURI, config)

db.on('open', () => console.log("connected to mongo"))
  .on('close', () => console.log('disconnected from mongo'))
  .on('error', (err) => console.log(err))

module.exports = mongoose