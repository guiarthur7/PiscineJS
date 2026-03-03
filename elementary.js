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
    if (b === 0) {
        throw new Error();
    }
    
    if (a === 0) {
        return 0;
    }
    
    let res = 0;
    let isNegative = (a < 0) !== (b < 0);
    let absA = a < 0 ? -a : a;
    let absB = b < 0 ? -b : b;
    
    while (absA >= absB) {
        absA -= absB;
        res++;
    }
    
    return isNegative ? -res : res;
}

function modulo(a, b) {
    while (a < b) {
        a -= b
    }
    return a
}