var assert = require('assert')
var sub = require('../lib/sub')
//TODO move tests to tape

assert.equal(sub('face'), '😀')
assert.equal(sub('yo face'), 'yo 😀')
assert.equal(sub('wow face wow'), 'wow 😀 wow')
assert.equal(sub('wow face face'), 'wow 😀 😀')
// test pundctuations
assert.equal(sub('wow face, such face'), 'wow 😀, such 😀')
assert.equal(sub('yo, what face'), 'yo, what 😀')
assert.equal(sub('YO, WHAT FACE'), 'YO, WHAT 😀')
// test direct hits
assert.equal(sub('misconstrued grin'), 'misconstrued 😁')
assert.equal(sub('tearsoff joy'), 'tearsoff 😂')
assert.equal(sub('yU pensive'), 'yU 😔')
assert.equal(sub('bluu whale'), 'bluu 🐳')
// test collisions of flag emoji names with common words
assert.equal(sub('my face'), 'my 😀')
assert.equal(sub('ME face'), 'ME 😀')
console.log('PASS\n')
