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