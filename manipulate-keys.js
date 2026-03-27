function filterKeys(obj, fn) {
    let res = {}
    for (const key in obj) {
        if (fn(key)) {
            res[key] = obj[key]
        }
    }
    return res
}

