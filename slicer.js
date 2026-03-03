function slice(s, fromindex, lastindex = s.length) {
    let res = ""
    if (fromindex < 0) {
        fromindex = (s.length) + fromindex
    } else if (Lastindex < 0) {
        Lastindex = (s.length) + Lastindex
    }
    for (let i= fromindex; i<lastindex; i++) {
        res += String(s[i])
    }
    return res
}