function repeat(s, n) {
    if (n === 0) {
        return 0
    } else {
        let res = ""
        res += s
        return repeat(res, n-1)
    }
}