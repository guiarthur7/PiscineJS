function triangle(s, h) {
    let res = ""
    if (h === 0 || s === "") {
        return ""
    } else {
        for (let i = 1; i <= h; i++) {
            res += s.repeat(i) + "\n"
        }
        return res
    } 
}

console.log(triangle("*", 5));