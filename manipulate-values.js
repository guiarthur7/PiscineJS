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

function reduceValues(obj, func) {
    let res = 0
    for (const key in obj) {
        res += func(obj[key], 0)
    }
    return res
}