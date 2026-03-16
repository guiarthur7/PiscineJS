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
        res.push(func(tab[i], i, tab))
    }

    let res2 = []
    let res3 = ""
    for (let x = 0; x < res.length; x++) {
        if (Array.isArray(res[x])) {
            for (let y = 0; y < res[x].length; y++) {
                res2.push(res[x][y])
            }
        } else {
            res3 += res[x]
        }
    }
    if (res3) {
        return res3
    } else {
        return res2
    }
}