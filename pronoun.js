function pronoun(s) {
    const pronouns = new Set([
        'je','toi','il','elle','ils','nous',
        'i','you','he','she','they','we'
    ]);

    const words = (s.match(/[A-Za-z]+/g) || []).map(w => w.toLowerCase());
    const out = {};

    for (let i = 0; i < words.length; i++) {
        const w = words[i];
        if (!pronouns.has(w)) continue;
        if (!out[w]) out[w] = { wordSet: new Set(), count: 0 };
        out[w].count += 1;
        const next = words[i+1];
        if (next && !pronouns.has(next)) out[w].wordSet.add(next);
    }

    const res = {};
    for (const [k, v] of Object.entries(out)) {
        res[k] = { word: Array.from(v.wordSet), count: v.count };
    }
    return res;
}