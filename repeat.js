function repeat(s, n) {
    if (n === 1) {
        return 0
    } else {
        let res = ""
        res += s
        return repeat(res, n-1)
    }
}