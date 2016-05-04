var stream = require('stream')
var sub = require('./sub')

module.exports = getSubStream()

function getSubStream() {
  return new stream.Transform({ transform, flush })
}

function transform(chunk, encoding, callback) {
  console.log('chunk', chunk)
  var string = chunk.toString(encoding='utf8')
  console.log('string', string)
  var result = sub(string)
  //console.log('result', result)
  this.push(result)
  callback()
}

function flush(callback) {
  callback()
}
