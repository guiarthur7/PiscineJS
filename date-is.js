function isValid(date) {
    if (date instanceof Date && !isNaN(date.getTime())) {
        return true
    } else {
        return false
    }
}

console.log(isValid(Date.now()))