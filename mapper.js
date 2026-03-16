function map(tab, func) {
    let res = []
    for (let i = 0; i < tab.length; i++) {
        res.push(func(tab[i], i, tab))
    }
    return res
}