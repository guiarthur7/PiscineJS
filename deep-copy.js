function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) {
        const out = [];
        for (let i = 0; i < obj.length; i++) out[i] = deepCopy(obj[i]);
        return out;
    }

    const out = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            out[key] = deepCopy(obj[key]);
        }
    }
    return out;
}