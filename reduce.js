function fold(tab, func, n) {
    let res = 0
    tab.unshift(n)
    for (let i = 0; i<tab.length-1; i++) {
        res += func(tab[i], tab[i+1])
        i++
    }
    return res
}

function foldRight(tab, func, n) {
    let res = 0
    tab.unshift(n)
    for (let i = tab.length-1; i>0; i--) {
        res += func(tab[i], tab[i-1])
        i--
    }
    return res
}

function reduce(tab, func) {
    let res = 0
    for (let i = 0; i<tab.length-1; i++) {
        res += func(tab[i], tab[i+1])
        i++
    }
    return res + tab[tab.length-1]
}

function reduceRight(tab, func) {
    let res = 0
    for (let i = tab.length-1; i>0; i--) {
        res += func(tab[i], tab[i-1])
        i--
    }
    return res + tab[0]
}