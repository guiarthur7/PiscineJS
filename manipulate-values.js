function filterValues(obj, func) {
    let res = {}
    for (const key in obj) {
        if (func(obj[key])) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapValues(obj, func) {
    let res = {}
    for (const key in obj) {
        res[key] = func(obj[key])
    }
    return res
}

function reduceValues(obj, fn, initial) {
    const keys = Object.keys(obj);
    let i = 0;
    let acc;
    if (arguments.length >= 3) {
        acc = initial;
    } else {
        if (keys.length === 0) throw new TypeError('Reduce of empty object with no initial value');
        acc = obj[keys[0]];
        i = 1;
    }
    for (; i < keys.length; i++) {
        acc = fn(acc, obj[keys[i]]);
    }
    return acc;
}