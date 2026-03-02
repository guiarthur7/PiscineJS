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
    return s.ToUpperCase()
}

function whisper(s) {
    res = s.ToLowerCase()
    return "*" + res + "*"
}

function capitalize(s) {
    res = ""
    res += s[1].ToUpperCase() + s.slice(1).ToLowerCase()
    return res
}