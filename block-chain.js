function blockChain(data, prev = {index: 0, hash: '0'}) {
    const index = prev.index + 1;
    const hash = hashCode(prev.hash + index + JSON.stringify(data));
    const obj = {
        index: index,
        hash: hash,
        data: data,
        prev: prev,
        chain: function(nextData) {
            return blockChain(nextData, {index: obj.index, hash: obj.hash});
        }
    };
    return obj;
}