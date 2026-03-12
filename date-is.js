function isValid(date) {
    if (date instanceof Date) {
        return true
^C
    } if (!isNaN(date.getTime())) {
        return true
    } else {
        return false
    }
}

console.log(isValid(Date.now()))