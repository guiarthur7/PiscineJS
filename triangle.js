function triangle(s, h) {
    let res = ""
    if (h === 0 || s === "") {
        return ""
    } else {
        for (let i = 1; i <= h; i++) {
            if (i === h) {
                res += s.repeat(i)
            } else {
                res += s.repeat(i) + "\n"
            }
        }
        return res
    } 
}

console.log(triangle("*", 5));