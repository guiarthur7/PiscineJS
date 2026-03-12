function isValid(date) {
    if (date instanceof Date && !isNaN(date)) {
        return false
    } else {
        return true
    }
}