function multiply(a, b) {
    let res = 0
    if (a === 0 || b === 0) {
        return 0
    } if (a < 0 && b > 0) {
        for (let i = 0; i <b; i++) {
            res += a
        }
    } if (a > 0 && b < 0) {
        for (let i = 0; i <a; i++) {
            res += b
        }
    } if (a < 0 && b < 0) {
        for (let i = 0; i < -a; i++) {
            res += -b
        }
    } if (a > 0 && b > 0) {
        for (let i = 0; i < a; i++) {
            res += b
        }
    }    
    return res
}

function divide(a, b) {
    let res = 0
    if (a === 0 || b === 0) {
        throw Error;
    } if (a < 0 && b > 0) {
        for (let i = 0; i <b; i++) {
            res -= -a
        }
    } if (a > 0 && b < 0) {
        for (let i = 0; i <a; i++) {
            res -= -b
        }
    } if (a < 0 && b < 0) {
        for (let i = 0; i < -a; i++) {
            res -= -b
        }
    } if (a > 0 && b > 0) {
        for (let i = 0; i < a; i++) {
            res -= b
        }
    }    
    return res
}

function modulo(a, b) {
    while (a > b) {
        a -= b
    }
    return b
}