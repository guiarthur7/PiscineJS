function indexOf(tab, val, fromindex) {
    let i = fromindex
    while (tab[i] != val) {
        i++
    }
    if (i === 0) {
        return -1
    } else {
        return i
    }
}

function lastIndexOf(tab, val) {
    let index = 0
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] === val) {
            index = i
        }
    }
    return index
}

function includes(tab, val) {
    for (let i=0; i < tab.length; i++) {
        if (tab[i] === val) {
            return true
        }
    }
    return false
}