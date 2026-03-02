function words(s) {
    let tab = []
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            tab.push(str)
            str = ""
        } else {
            str += s[i]
        }
    }
    if (str.length > 0) {
        tab.push(str)
    }
    return tab
}

function sentence(tab) {
    let res = ""
    for (let i = 0; i < tab.length - 1; i++) {
        res += tab[i] + " "
    }
    res += tab[tab.length - 1]
    return res
}

function yell(s) {
    return s.toUpperCase()
}

function whisper(s) {
    let res = s.toLowerCase()
    return "*" + res + "*"
}

function capitalize(s) {
    let res = ""
    res += s[1].toUpperCase() + s.slice(1).toLowerCase()
    return res
}