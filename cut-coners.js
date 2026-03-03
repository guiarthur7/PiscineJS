function trunc(x) {
    if (x >= 0) {
        let i = 0;
        while (i + 1 <= x) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (i - 1 >= x) {
            i--;
        }
        return i;
    }
}

function floor(x) {
    if (x >= 0) {
        let i = 0;
        while (i + 1 <= x) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (i > x) {
            i--;
        }
        return i;
    }
}

function ceil(x) {
    if (x >= 0) {
        let i = 0;
        while (i < x) {
            i++;
        }
        return i;
    } else {
        let i = 0;
        while (i - 1 >= x) {
            i--;
        }
        return i;
    }
}

function round(x) {
    let entier = trunc(x);
    let decimal = x - entier;
    
    if (x >= 0) {
        if (decimal >= 0.5) {
            return entier + 1;
        } else {
            return entier;
        }
    } else {
        if (decimal <= -0.5) {
            return entier - 1;
        } else {
            return entier;
        }
    }
}
