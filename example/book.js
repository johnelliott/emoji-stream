var fs = require('fs')
var sub = require('../emoji-stream')

var story = fs.createReadStream(__dirname+'/mobydick.txt')
var newStory = fs.createWriteStream(__dirname+'/emojidick.txt')

story.on('readable', ()=>{
  console.log('readable!')
  story.pipe(sub).pipe(newStory)
})
