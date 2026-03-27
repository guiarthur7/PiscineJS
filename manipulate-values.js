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
