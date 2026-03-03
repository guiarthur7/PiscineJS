function slice(s, fromindex, lastindex = s.length - 1) {
    let res = ""
    if (fromindex < 0) {
        fromindex = (s.length -1) +fromindex
    }
    for (let i= fromindex; i<=lastindex; i++) {
        res += String(s[i])
    }
    return res
}