function slice(s, fromindex, lastindex = s.length) {
    let res = ""
    for (let i= fromindex; i<=lastindex; i++) {
        res += String(tab[i])
    }
    return res
}