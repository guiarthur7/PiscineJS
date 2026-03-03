function indexOf(tab, val) {
    let i = 0
    while (tab[i] != val) {
        i++
    }
    return i+1
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