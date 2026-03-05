function sameAmount(s, r1, r2) {
    let count1 = (s.match(new RegExp(r1.source, 'g')) || []).length
    let count2 = (s.match(new RegExp(r2.source, 'g')) || []).length
    
    return count1 === count2
}