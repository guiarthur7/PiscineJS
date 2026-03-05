function nasa(n) {
    let res = ""
    let s = String(n)
    for (let i = 0; i < s.length; i++) {
        if (int(s[i]%5 === 0 && int(s[i]%3 === 0))) {
            res += "NASA"
        } else if (int(s[i]%3 === 0)) {
            res += "NA"
        } else if (int(s[i]%5 === 0)) {
            res += "SA"
        }
    }
    return res
}