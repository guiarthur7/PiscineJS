function isValid(date) {
    if (date instanceof Date && !isNaN(date)) {
        return true
    } else {
        return false
    }
}