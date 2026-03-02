const hashCode = (str) => {
    return [...str].reduce((hash, char) => {
        const chr = char.charCodeAt(0);
        hash = ((hash << 5) - hash) + chr;
        return hash & hash;
    }, 0);
};

function blockChain(data, prev = {index: 0, hash: '0'}) {
    const obj = {
        index: prev.index + 1,
        hash: hashCode(prev.hash + prev.index + JSON.stringify(data)).toString(16),
        data: data,
        prev: prev,
        chain: function(nextData) {
            return blockChain(nextData, {index: obj.index, hash: obj.hash});
        }
    };
    return obj;
}