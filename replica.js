function replica(target, ...sources) {
    function isPlainObject(v) {
        return Object.prototype.toString.call(v) === '[object Object]';
    }

    function deepCopy(v) {
        if (v === null || typeof v !== 'object') return v;
        if (Array.isArray(v)) return v.map(deepCopy);
        const o = {};
        for (const k in v) if (Object.prototype.hasOwnProperty.call(v, k)) o[k] = deepCopy(v[k]);
        return o;
    }

    function merge(a, b) {
        if (a === undefined) return deepCopy(b);
        if (b === undefined) return deepCopy(a);
        if (Array.isArray(a) && Array.isArray(b)) return deepCopy(a).concat(deepCopy(b));
        if (isPlainObject(a) && isPlainObject(b)) {
            const out = {};
            for (const k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = deepCopy(a[k]);
            for (const k in b) {
                if (!Object.prototype.hasOwnProperty.call(b, k)) continue;
                if (Object.prototype.hasOwnProperty.call(out, k)) {
                    out[k] = merge(out[k], b[k]);
                } else {
                    out[k] = deepCopy(b[k]);
                }
            }
            return out;
        }
        return deepCopy(b);
    }

    let result = deepCopy(target);
    for (const src of sources) {
        result = merge(result, src);
    }
    return result;
}