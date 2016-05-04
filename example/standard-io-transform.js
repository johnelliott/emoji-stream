var tr = require('../emoji-stream')
process.stdin.pipe(tr).pipe(process.stdout)
