function chunk(tab, d) {
    let res = []
    let tab2 = []
    let d1 = 0
    for (let i = 0; i < tab.length; i++) {
        if (d1 < d) {
            tab2.push(tab[i])
            d1 += 1
        } else {
            res.push(tab2)
            tab2 = [tab[i]]
            d1 = 1
        }
    }
    if (tab2.length > 0) {
        res.push(tab2)
    }
    return res
}

console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk(["a", "b", "c", "d", "e"], 2));