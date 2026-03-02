function repeat(s, n) {
    if (n === 0) {
        return ""
    } else {
        return s + repeat(s, n - 1)
    }
}