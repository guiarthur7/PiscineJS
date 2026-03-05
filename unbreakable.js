function join(s, j = ",") {
    res = s[0]
    for (let i=1; i < s.length; i++) {
        res += j + s[i]
    }
    return res
}

function split(s, j) {
    let res = []
    let s1 = ""
    for (let i = 0; i < s.length; i++) {
        if (s[i] === j) {
            res.push(s1)
            s1 = ""
        } else {
            s1 += s[i]
        }
    }
    if (s1.length > 0) {
        res.push(s1)
    }
    return res
}