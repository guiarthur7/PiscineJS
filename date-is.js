function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime());
    }
    if (typeof date === 'number' && Number.isFinite(date)) {
        return true;
    }
    return false;
}

console.log(isValid(Date.now()))