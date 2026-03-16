
function fold(tab, func, initial) {
    let acc = initial
    for (let i = 0; i < tab.length; i++) {
        acc = func(acc, tab[i], i, tab)
    }
    return acc
}


function foldRight(tab, func, initial) {
    let acc = initial
    for (let i = tab.length - 1; i >= 0; i--) {
        acc = func(acc, tab[i], i, tab)
    }
    return acc
}

function reduce(tab, func) {
    for (let i = 0; i < tab.length; i++) {
        acc = func(acc, tab[i], i, tab)
    }
    return acc
}

function reduceRight(tab, func) {
    for (let i = tab.length - 1; i >= 0; i--) {
        acc = func(acc, tab[i], i, tab)
    }
    return acc
}