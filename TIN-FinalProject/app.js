const express = require('express')
const app = express()
const path = require('path')
//const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

// connect to mongodb
/*
const dbURI = 'mongodb+srv://ozgur:Test1234@userscores.xhxn8.mongodb.net/TIN?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true }).then((result) => app.listen(8000))
.catch((err)=> console.log(err))
*/
const game = require('./public/gamerouter.js')
const start = require('./public/startpage.js')
// const gamescore = require('./public/game.js')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/gameStart', start.start)
app.get('/game', game.game)
// const score = gamescore.score

// app.get('/highscores', game.game)


app.listen(8000)