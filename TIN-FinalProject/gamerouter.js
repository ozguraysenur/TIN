
const path = require('path')

module.exports.game = function (req, res) {
  res.sendFile(path.join(__dirname, './index.html'))
}
