var assert = require('assert')
var emoji = require('emojilib')

// thanks notwaldorf/emoji-translate
const symbols = '!"#$%&\'()*+,-./:;<=>?@[]^_`{|}~'

function hasChar(e) {
  return emoji.lib[e] && emoji.lib[e].char ? true : false
}

function sub(sentence) {
  return sentence.split(' ').map((w)=>{

    var candidate = w.toLowerCase()
    var firstSymbol = '';
    var lastSymbol = '';
    while (symbols.indexOf(candidate[0]) != -1) {
      firstSymbol += candidate[0];
      candidate = candidate.slice(1, candidate.length);
    }
    while (symbols.indexOf(candidate[candidate.length - 1]) != -1) {
      lastSymbol += candidate[candidate.length - 1];
      candidate = candidate.slice(0, candidate.length - 1);
    }

    var matched = match(candidate)
    return matched ? firstSymbol + matched + lastSymbol : w
  }).join(' ')
}

function randomIndex(array) {
	return array[Math.floor(Math.random() * array.length)]
}

// takes word, returns emoji or false
function match(word) {
  for (i=0; i < emoji.ordered.length; i++) {
    // handle no emoji to display
    if (!hasChar(emoji.ordered[i])) {
      return false
    }
    // directly match  emoji names and ignore flag direct hits e.g. my, me
    // TODO randomize whale, whale2, tiger2 for more fun
    if (emoji.ordered.indexOf(word) >= 0 && emoji.lib[word].category !== 'flags') {
      return emoji.lib[word].char
    }
    var keywords = emoji.lib[emoji.ordered[i]].keywords
    return keywords.indexOf(word) >= 0 ? emoji.lib[emoji.ordered[i]].char : false
  }
}

module.exports = sub
