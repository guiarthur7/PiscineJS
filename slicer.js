function slice(s, fromindex, lastindex = s.length) {
    let res = ""
    if (fromindex < 0) {
        fromindex = (s.length) + fromindex
    }
    for (let i= fromindex; i<lastindex; i++) {
        res += String(s[i])
    }
    return res
}