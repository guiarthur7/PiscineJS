function words(s) {
    let tab = []
    let str = ""
    for (let i = 0; i < s.Length - 1; i++) {
        if (s[i] == " ") {
            tab.push(str)
            str = ""
        } else {
            str += s[i]
        }
    }
    return tab
}

function sentence(tab) {
    let res = ""
    for (let i = 0; i < tab.Length -1; i++) {
        res += tab[i] + " "
    }
    return res
}

function yell(s) {
    return s.ToLowerCase()
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