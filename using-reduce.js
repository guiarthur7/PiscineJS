function funcExec(arr, init) {
    return arr.reduce((acc, fn) => fn(acc), init);
}

function sumOrMul(arr, init) {
    return arr.reduce((acc, n) => n % 2 === 0 ? acc * n : acc + n, init);
}

console.log(sumOrMul([1, 2, 3, 5, 8], 5));

function adder(tab, init) {
    return tab.reduce((add, val) => add + val, init)
}

console.log(adder([1,2,7]))