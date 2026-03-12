function isFriday(date) {
    if (date.getDay() === 5) {
        return true
    } else {
        return false
    }
}

function isWeekend(date) {
    if (date.getDay() === 6 ||date.getDay() === 7) {
        return true
    } else {
        return false
    }
}

function isLeapYear(date) {
    let year = date.getFullYear()
    if (year%4 === 0 && year%100 !== 0 || year%400 === 0) {
        return true
    } else {
        return false
    }
}

function isLastDayOfMonth(date) {
    let nextDay = new Date(date);
    nextDay.setDate(date.getDate() + 1);
    if (nextDay.getMonth() !== date.getMonth()) {
        return true
    } else {
        return false
    }
}

console.log(isLastDayOfMonth(new Date("2024-02-29"))); // true
console.log(isLastDayOfMonth(new Date("2024-02-28"))); // false
console.log(isLastDayOfMonth(new Date('2020-12-31')))