require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const characterRouter = require('./controller/character')
const itemRouter = require('./controller/item')
const resetRouter = require('./controller/resetData')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get("/", (req, res) => {
    res.json({ hello: "Hello World!" });
});

app.use('/character', characterRouter)
app.use('/item', itemRouter)
app.use('/absoluteresetonly', resetRouter)

app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});