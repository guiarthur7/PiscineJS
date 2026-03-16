function filter(tab, pred) {
    let tab = []
    for (let i = 0; i < tab.length; i++) {
        if (pred(tab[i], i, tab)) {
            tab.push(tab[i])
        }
    }
    return tab
}

function reject(tab, pred) {
    let tab = []
    for (let i = 0; i < tab.length; i++) {
        if (!pred(tab[i], i, tab)) {
            tab.push(tab[i])
        }
    }
    return tab
}

function partition(tab, pred) {
    let tab = []
    let tab2 = []
    for (let i = 0; i < tab.length; i++) {
        if (pred(tab[i], i, tab)) {
            tab.push(tab[i])
        } else {
            tab2.push(tab[i])
        }
    }
    return [tab, tab2]
}