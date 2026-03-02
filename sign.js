function sign(n) {
    if (n > 0) {
        return 1
    } if (n < 0) {
        return -1
    } else {
        return n
    }
}

function sameSign(n1, n2) {
    let a = sign(n1)
    let b = sign(n2)
    if (n1 === n2) {
        return true
    } else {
        return false
    }
}