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
    for (let x = 0; x < res.length; x++) {
        for (let y = 0; y < res[x].length; y++) {
            res2.push(res[x][y])
        }
    }
    return res2
}