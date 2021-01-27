const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
  name: {
    type: String
  },
  score: {
    type: Number
  }
}, { timestamps: true })

const Score = mongoose.model('Score' , scoreSchema)

module.exports = Score;
