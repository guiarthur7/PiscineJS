function isValid(date) {
    if (date instanceof Date && !isNaN(date.getTime())) {
        return true
    } else if (date = Date.now()) {
        return true
    } else {
        return false
    }
}

console.log(isValid(Date.now()))