function countLeapYears(date) {
    let year = date.getFullYear()
    let cpt = 0

    for (let i = 0; i < Number(year); i++) {
        if (i%4 === 0 && i%100 !== 0 || i%400 === 0) {
            cpt += 1
        }
    }
    return cpt - 1
}

console.log(countLeapYears(new Date("0004-01-01"))); // 0 (since leap year 4 hasn’t completed yet)
console.log(countLeapYears(new Date("0005-01-01"))); // 1 (year 4 is a leap year)
console.log(countLeapYears(new Date("2024-01-01"))); // 490
console.log(countLeapYears(new Date("2025-01-01"))); // 491