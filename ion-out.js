function ionOut(s) {
    let matches = s.match(/\b\w+tion\b/g)
    let res = []
    
    if (!matches) {
        return res
    }
    
    for (let i = 0; i < matches.length; i++) {
        res.push(matches[i].slice(0, -3))
    }
    
    return res
}