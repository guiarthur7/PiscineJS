function pyramid(s, h) {
    let res = ""
    let space = " "
    for (let i = 1; i <= h; i++) {
        res += space.repeat((h-i) * s.length) + s.repeat(2*i-1)
        if (i !== h) {
            res += '\n'
        }
    }
    return res
}

console.log(pyramid("*", 5));