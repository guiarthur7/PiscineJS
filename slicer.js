function slice(s, fromindex, lastindex = s.length) {
    let res = ""
    if (fromindex < 0) {
        fromindex = (s.length) + fromindex 
    } if (lastindex < 0) {
        lastindex = (s.length) + lastindex 
    }
    for (let i= fromindex; i<lastindex; i++) {
        res += String(s[i])
    }
    return res
}