function trunc(x) {
    if (x >= 0) {
        if (x < 1) return 0;
        
        // Créer des puissances de 2 : [1, 2, 4, 8, 16, ...]
        let powers = [1];
        while (powers[powers.length - 1] + powers[powers.length - 1] <= x) {
            powers.push(powers[powers.length - 1] + powers[powers.length - 1]);
        }
        
        // Construire le résultat avec les puissances
        let result = 0;
        for (let i = powers.length - 1; i >= 0; i--) {
            while (result + powers[i] <= x) {
                result = result + powers[i];
            }
        }
        return result;
    } else {
        if (x > -1) return 0;
        
        let powers = [1];
        while (powers[powers.length - 1] + powers[powers.length - 1] <= -x) {
            powers.push(powers[powers.length - 1] + powers[powers.length - 1]);
        }
        
        let result = 0;
        for (let i = powers.length - 1; i >= 0; i--) {
            while (result - powers[i] >= x) {
                result = result - powers[i];
            }
        }
        return result;
    }
}

function floor(x) {
    let t = trunc(x);
    if (x === t) return t;
    if (x > 0) return t;
    return t - 1;
}

function ceil(x) {
    let t = trunc(x);
    if (x === t) return t;
    if (x > 0) return t + 1;
    return t;
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
