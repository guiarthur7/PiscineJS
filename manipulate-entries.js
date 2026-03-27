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