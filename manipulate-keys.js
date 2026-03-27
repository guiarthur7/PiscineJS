function filterKeys(obj, fn) {
    let res = {}
    for (const key in obj) {
        if (fn(key)) {
            res[key] = obj[key]
        }
    }
    return res
}

function mapKeys(obj, fn) {
    let res = {}
    const keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        let a = fn(keys[i])
        res[a] = obj[keys[i]]
    }
    return res
}

function reduceKeys(obj, fn, initial) {

    const keys = Object.keys(obj);
    let i = 0;
    let acc;
    if (arguments.length >= 3) {
        acc = initial;
    } else {
        if (keys.length === 0) throw new TypeError('Reduce of empty object with no initial value');
        acc = keys[0];
        i = 1;
    }
    for (; i < keys.length; i++) {
        acc = fn(acc, keys[i]);
    }
    return acc;

}