const pronoms = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];

function tokenizeWords(input) {
    return input.split(/[\s,]+/).map(word => word.trim()).filter(Boolean);
}

const nextNonPronounWord = (tokens, index) => {
    const candidate = tokens[index];
    if (!candidate) return '';
    return pronoms.includes(candidate.toLowerCase()) ? '' : candidate;
};

function pronoun(text) {
    const tokens = tokenizeWords(text);
    const result = {};

    for (let idx = 0; idx < tokens.length; idx++) {
        const token = tokens[idx];
        const lower = token.toLowerCase();
        if (!pronoms.includes(lower)) continue;

        const nextWord = nextNonPronounWord(tokens, idx + 1);

        if (!result[lower]) {
            result[lower] = { word: [], count: 1 };
            if (nextWord) result[lower].word.push(nextWord);
        } else {
            if (nextWord) result[lower].word.push(nextWord);
            result[lower].count++;
        }
    }

    return result;
}