var emoji = require('emojilib')

var weeLib = {
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy"],
    "char": "😀",
    "category": "people"
  },
  "grin": {
    "keywords": ["face", "happy", "smile", "joy"],
    "char": "😁",
    "category": "people"
  }
}
var weeList = ['grinning', 'grin']

function sub(sentence) {
  return sentence.split(' ').map((w)=>{
    return randomIndex(matches(w)) ||w
  }).join(' ')
}

function randomIndex(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function matches(word) {
	return weeList.map((emoji)=>{
		return weeLib[emoji].keywords.map((k)=>{
			//console.log('tick')
			return k === word ? weeLib[emoji].char : null
		}).reduce((p,c)=>{ return p||c })
	})
}

console.log('sub:', sub('look at my grinning face it\'s joy'))
