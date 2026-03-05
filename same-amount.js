function sameAmount(s, r1, r2) {
    let matches1 = s.match(r1)
    let matches2 = s.match(r2)
    
    let count1 = matches1 ? matches1.length : 0
    let count2 = matches2 ? matches2.length : 0
    
    return count1 === count2
}