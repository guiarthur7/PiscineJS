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