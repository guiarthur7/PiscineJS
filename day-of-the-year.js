function dayOfTheYear(date) {
    const year = date.getFullYear()
    if (year === 1 && date.getMonth() === 0 && date.getDate() === 1) {
        return 1;
    }
    let d = new Date(year, 0, 1)
    let res = date - d
    return Math.floor((res / 86400000)) + 1
}

console.log(dayOfTheYear(new Date("2024-01-01"))); // 1
console.log(dayOfTheYear(new Date("2024-02-01"))); // 32 (31 days in January + 1)
console.log(dayOfTheYear(new Date("2024-12-31"))); // 366 (leap year)
console.log(dayOfTheYear(new Date("2023-12-31"))); // 365 (non-leap year)
console.log(dayOfTheYear(new Date('0001-01-01')))