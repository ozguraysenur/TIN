const express = require('express')
const app = express()
const path = require('path')
// const fs = require('fs')
// const bodyParser = require('body-parser')

const game = require('./gamerouter.js')
const start = require('./startpage.js')

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/gameStart', start.start)
app.get('/game', game.game)
//app.get('/highscores', game.game)

app.listen(8000, () => console.log("Server is running "));