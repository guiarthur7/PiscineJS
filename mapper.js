function map(tab, func) {
    let res = []
    for (let i = 0; i < tab.length; i++) {
        res.push(func(tab[i], i, tab))
    }
    return res
}

function flatMap(tab, func) {
    let res = []
    for (let i = 0; i < tab.length; i++) {
        const val = func(tab[i], i, tab)
        if (Array.isArray(val)) {
            for (let j = 0; j < val.length; j++) {
                res.push(val[j])
            }
        } else {
            res.push(val)
        }
    }
    return res
}