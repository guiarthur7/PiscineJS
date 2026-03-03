function reverse(s) {
    if (typeof s === 'string') {
        let res = ""
        for (let i = s.length - 1; i >= 0; i--) {
            res += s[i]
        }
        return res
    } if (Array.isArray(s)){
        let res = []
        for (let i = s.length - 1; i >= 0; i--) {
            res.push(s[i])
        }
        return res
    } else {
        throw Error
    }
}