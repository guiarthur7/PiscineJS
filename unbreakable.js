function join(s, j = ",") {
    res = s[0]
    for (let i=1; i < s.length; i++) {
        res += j + s[i]
    }
    return res
}

function split(s, j) {
    let res = []
    let s1 = ""
    let jl = j.length
    let sl = s.length - 1
    for (let i = 0; i <= sl; i++) {
        if (s.slice(i, i+jl) === j) {
            res.push(s1)
            s1 = ""
            i += jl - 1
        } else {
            s1 += s[i]
        }
    }
    if (s1.length > 0) {
        res.push(s1)
    }
    return res
}

console.log(split("salut frero je mapelle arthur", " "))
console.log(split("salut - je - mapelle - arthur", " - "))