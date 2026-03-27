function filterEntries(obj, fn) {
    let res = {}
    for (const [key, value] of Object.entries(obj)) {
        if (fn([key, value])) {
            res[key] = value
        }
    }
    return res
}

function mapEntries(obj, fn) {
    let res = {}
    for (const [key, value] of Object.entries(obj)) {
        res[fn([key, value])[0]] = fn([key, value])[1]
    }
    return res
}

function reduceEntries(obj, fn) {
    const entries = Object.entries(obj);
    let i = 0;
    let acc;
    if (arguments.length >= 3) {
        acc = arguments[2];
    } else {
        if (entries.length === 0) throw new TypeError('Reduce of empty object with no initial value');
        acc = entries[0];
        i = 1;
    }
    for (; i < entries.length; i++) {
        acc = fn(acc, entries[i]);
    }
    return acc;
}