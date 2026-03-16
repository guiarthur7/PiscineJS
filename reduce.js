function fold(tab, func, n) {
    let res = 0
    tab.unshift(n)
    for (let i = 0; i<tab.length-1; i++) {
        res += func(tab[i], tab[i+1])
        i++
    }
    return res
}

const adder = (a, b) => a + b;
console.log(fold([1, 2, 3], adder, 2));

function foldRight(tab, func, n) {
    let res = 0
    tab.unshift(n)
    for (let i = tab.length-1; i>0; i--) {
        res += func(tab[i], tab[i-1])
        i--
    }
    return res
}

console.log(foldRight([1, 2, 3], adder, 2));

function reduce(tab, func) {
    let res = 0
    for (let i = 0; i<tab.length-1; i++) {
        res += func(tab[i], tab[i+1])
        i++
    }
    return res + tab[tab.length-1]
}

console.log(reduce([1, 2, 3], adder))

function reduceRight(tab, func) {
    let res = 0
    for (let i = tab.length-1; i>0; i--) {
        res += func(tab[i], tab[i-1])
        i--
    }
    return res + tab[0]
}

console.log(reduceRight([1, 2, 3], adder))