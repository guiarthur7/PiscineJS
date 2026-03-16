function every(tab, func) {
    let n = 0 
    for (let i=0;i<tab.length;i++) {
        if (func(tab[i], i, tab)) {
            n++
        }
    }
    if (n === tab.length) {
        return true
    } else {
        return false
    }
}

function some(tab, func) {
    for (let i=0;i<tab.length;i++) {
        if (func(tab[i], i, tab)) {
            return true
        }
    }
    return false
}

function none(tab, func) {
    let n = 0 
    for (let i=0;i<tab.length;i++) {
        if (func(tab[i], i, tab)) {
            return false
        }
    }
    return true
}