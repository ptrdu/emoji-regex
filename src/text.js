module.exports = () => {
	// https://mths.be/emoji
	return /<% emojiSequence %>|\p{Emoji}\uFE0F?/gu;
};
