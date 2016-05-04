var stream = require('stream')
var sub = require('./lib/sub')

module.exports = getSubStream()

function getSubStream() {
  return new stream.Transform({ transform, flush })
}

function transform(chunk, encoding, callback) {
  var string = chunk.toString(encoding='utf8')
  this.push(sub(string))
  callback()
}

function flush(callback) {
  callback()
}
