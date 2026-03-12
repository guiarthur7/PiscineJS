function isValid(date) {
    if (!isNaN(date.getTime())) {
        return true
    } else {
        return false
    }
}

console.log(isValid(Date.now()))