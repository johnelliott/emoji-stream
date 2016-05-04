var assert = require('assert')
var emoji = require('emojilib')

function hasChar(e) {
  return emoji.lib[e] && emoji.lib[e].char ? true : false
}

function sub(sentence) {
  return sentence.split(' ').map((w)=>{
    return match(w)
  }).join(' ')
}

function randomIndex(array) {
	return array[Math.floor(Math.random() * array.length)]
}

function matches(word) {
	return emoji.ordered.map((e)=>{
		if (!hasChar(e)) {
			return word
		}
		return emoji.lib[e].keywords.map((k)=>{
			return k === word ? emoji.lib[e].char : null
		}).reduce((p,c)=>{ return p||c })
	})
}

function match(word) {
	for (i=0; i < emoji.ordered.length; i++) {

		if (!hasChar(emoji.ordered[i])) {
			return false
		}
		var keywords = emoji.lib[emoji.ordered[i]].keywords
		return keywords.indexOf(word) >= 0 ? emoji.lib[emoji.ordered[i]].char : word
	}
}

module.exports = sub
