function indexOf(tab, val, fromindex = 0) {
    let i = fromindex
    while (tab[i] != val && i < tab.length) {
        i++
    }
    if (i >= tab.length) {
        return -1
    } else {
        return i
    }
}

function lastIndexOf(tab, val) {
    let i = tab.length - 1
    while(tab[i] != val && i >= 0) {
        i--
    }
    if (i < 0) {
        return -1
    } else {
        return i
    }
}

function includes(tab, val) {
    for (let i=0; i < tab.length; i++) {
        if (tab[i] === val) {
            return true
        }
    }
    return false
}