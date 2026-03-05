function pyramid(s, h) {
    let res = ""
    for (let i = 0; i <= h; i++) {
        if (i === h) {
            res += s.repeat(2*i-1)
        }
        res += s.repeat(2*i-1) + '\n'
    }
    return res
}