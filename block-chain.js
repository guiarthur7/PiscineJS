function blockChain(data, prev = {index: 0, hash: '0'}) {
    const obj = {
        index: prev.index + 1,
        hash: hashCode(prev.hash + prev.index + JSON.stringify(data)),
        data: data,
        prev: prev,
        chain: function(nextData) {
            return blockChain(nextData, {index: obj.index, hash: obj.hash});
        }
    };
    return obj;
}

const hashCode = (str) =>
  (
    [...str].reduce((h, c) => (h = (h << 5) - h + c.charCodeAt(0)) & h, 0) >>> 0
  ).toString(36);