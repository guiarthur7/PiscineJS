function nasa(n) {
    let res = ""
    let s = String(n)
    for (let i = 0; i < s.length; i++) {
        if (number(s[i]%5 === 0 && number(s[i]%3 === 0))) {
            res += "NASA"
        } else if (number(s[i]%3 === 0)) {
            res += "NA"
        } else if (number(s[i]%5 === 0)) {
            res += "SA"
        }
    }
    return res
}