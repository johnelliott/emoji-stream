# Emoji Stream
🔧 transform text stream to emoji node.js style

# About
This module exposes a transform stream that converts text to text with emoji characters. Check out the [stream handbook](http://github.com/substack/stream-handbook/#transform) for more info on using transform streams.

This module uses some features introduced in node v4.

# Install
```sh
$ npm install --save emoji-stream
```

# Use
Example: reading a file [from disk](https://nodejs.org/api/fs.html#fs_class_fs_readstream), transform, and write result back [to disk](https://nodejs.org/api/fs.html#fs_class_fs_writestream)

```js
var fs = require('fs')
var tr = require('emoji-stream')

var story = fs.createReadStream(__dirname+'/mobydick.txt')
var newStory = fs.createWriteStream(__dirname+'/emojimobydick.txt')

story.on('readable', ()=>{
  console.log('readable!')
  story.pipe(tr).pipe(newStory)
})
```
```
$ cat emojimobydick.txt

...SACRED TO THE MEMORY OF The late CAPTAIN EZEKIEL HARDY, Who in the bows
of his ⛵ was killed by 🅰️ Sperm 🐳 🔛 the coast of 🗾, AUGUST
3d, 1833. THIS TABLET Is erected to his Memory BY HIS WIDOW...
```


# Built with
- [muan/emojilib](https://github.com/muan/emojilib)
