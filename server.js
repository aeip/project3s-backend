require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const characterRouter = require('./controller/character')

const resetRouter = require('./controller/resetData')
const scoreRouter = require('./controller/scoreboard')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
});

app.use('/character', characterRouter)

app.use('/absoluteresetonly', resetRouter)
app.use('/score', scoreRouter)

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});