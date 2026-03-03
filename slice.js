function slice(s, fromindex, lastindex) {
    let res = []
    for (let i= fromindex; i<=lastindex; i++) {
        res.push(s[i])
    }
    return res
}