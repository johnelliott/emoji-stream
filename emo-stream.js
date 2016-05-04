var assert = require('assert')
var emoji = require('emojilib')
//console.log(emoji.ordered.length)
//console.log(emoji.lib[emoji.ordered[0]])

function hasChar(e) {
  return emoji.lib[e] && emoji.lib[e].char ? true : false
}
assert(emoji.ordered[0]==='grinning')
assert.equal(hasChar('grinning'), true)
assert.equal(hasChar('rage1'), false)
assert.equal(hasChar('johnelliott'), false)

// re-defined emoji for testing
//emoji = {
//	lib: {
//		"grinning": {
//			"keywords": ["face", "smile", "happy", "joy"],
//			"char": "😀",
//			"category": "people"
//		},
//		"grin": {
//			"keywords": ["face", "happy", "smile", "joy"],
//			"char": "😀",
//			"category": "people"
//		}
//	},
//	ordered: ['grinning', 'grin']
//}

var count = 0;
var fastCount = 0;


function slowSub(sentence) {
  return sentence.split(' ').map((w)=>{
		console.log('word in consideration:', w)
    return randomIndex(matches(w)) || w
  }).join(' ')
}

function sub(sentence) {
  return sentence.split(' ').map((w)=>{
		console.log('word in consideration:', w)
    return match(w) || w
  }).join(' ')
}

function randomIndex(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function matches(word) {
	return emoji.ordered.map((e)=>{
		if (!hasChar(e)) {
			//console.log('no char!')
			return word
		}
		//console.log('emoji', emoji.lib[e].char+' ', word, '->', emoji.lib[e].keywords)
		return emoji.lib[e].keywords.map((k)=>{
			count++
			return k === word ? emoji.lib[e].char : null
		}).reduce((p,c)=>{ return p||c })
	})
}

function match(word) {
	for (i=0; i < emoji.ordered.length; i++) {
		console.log('list index', i)
		console.log('list address', emoji.ordered[i])
		console.log('list has?', hasChar(emoji.ordered[i]))

		if (!hasChar(emoji.ordered[i])) {
			fastCount++
			return false
		}
		var keywords = emoji.lib[emoji.ordered[i]].keywords
		console.log('keywords', keywords)
		console.log('word', word)
			fastCount++
		return keywords.indexOf(word)>=0 ?  emoji.lib[emoji.ordered[i]].char : false
	}
}

console.log('\nsub:', sub('me grin grinning happy'))
console.log('\nslowSub:', slowSub('me grin grinning happy'))
console.log('count',count)
console.log('fastCount',fastCount)
module.exports = sub
