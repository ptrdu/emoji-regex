var assert = require('assert');
var emojiRegex = require('../index.js');

describe('Emoji regex', function() {
	it('matches expected code points', function() {

		// U+1F198 SQUARED SOS
		assert(emojiRegex().test('\uD83C\uDD98'));

		// U+1F1FE REGIONAL INDICATOR SYMBOL LETTER Y
		// U+1F1EA REGIONAL INDICATOR SYMBOL LETTER E
		// → flag for Yemen
		assert(emojiRegex().test('\uD83C\uDDFE\uD83C\uDDEA'));
		assert.deepEqual(
			'\uD83C\uDDFE\uD83C\uDDEA'.match(emojiRegex())[0],
			'\uD83C\uDDFE\uD83C\uDDEA'
		);

		// U+1F1FA REGIONAL INDICATOR SYMBOL LETTER U
		// U+1F1F8 REGIONAL INDICATOR SYMBOL LETTER S
		// → flag for United States
		assert(emojiRegex().test('\uD83C\uDDFA\uD83C\uDDF8'));
		assert.deepEqual(
			'\uD83C\uDDFA\uD83C\uDDF8'.match(emojiRegex())[0],
			'\uD83C\uDDFA\uD83C\uDDF8'
		);

	});

});
