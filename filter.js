function filter(tab, pred) {
    let tabb = []
    for (let i = 0; i < tab.length; i++) {
        if (pred(tab[i], i, tab)) {
            tabb.push(tab[i])
        }
    }
    return tabb
}

function reject(tab, pred) {
    let tabb = []
    for (let i = 0; i < tab.length; i++) {
        if (!pred(tab[i], i, tab)) {
            tabb.push(tab[i])
        }
    }
    return tabb
}

function partition(tab, pred) {
    let tabb = []
    let tab2 = []
    for (let i = 0; i < tab.length; i++) {
        if (pred(tab[i], i, tab)) {
            tabb.push(tab[i])
        } else {
            tab2.push(tab[i])
        }
    }
    return [tabb, tab2]
}