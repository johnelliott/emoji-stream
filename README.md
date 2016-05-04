# emoji stream
🔧 transform text to emoji node.js style

# installation
```sh
$ npm install --save emoji-stream
```

This module uses some features introduced in node v4.

# usage
This module exposes a transform stream that converts text to text with emoji characters. Check out the [stream handbook](http://github.com/substack/stream-handbook/#transform) for more info on using transform streams.
```js
var fs = require('fs')
var tr = require('emoji-stream')

var story = fs.createReadStream(__dirname+'/mobydick.txt')
var newStory = fs.createWriteStream(__dirname+'/emojidick.txt')

story.on('readable', ()=>{
  console.log('readable!')
  story.pipe(tr).pipe(newStory)
})
```
```
$ cat emojidick.txt

...SACRED TO THE MEMORY OF The late CAPTAIN EZEKIEL HARDY, Who in the bows
of his ⛵ was killed by 🅰️ Sperm 🐳 🔛 the coast of 🗾, AUGUST
3d, 1833. THIS TABLET Is erected to his Memory BY HIS WIDOW...
```

# TODO 🙌🔥💯

- randomize on similar emoji names e.g. tiger, tiger2
- randomize on match without murdering perf
- work flags back in with all caps e.g. MY, AF, US
