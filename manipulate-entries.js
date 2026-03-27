function filterEntries(obj, fn) {
    let res = {}
    for (const [key, value] of Object.entries(obj)) {
        if (fn([key, value])) {
            res[key] = value
        }
    }
    return res
}