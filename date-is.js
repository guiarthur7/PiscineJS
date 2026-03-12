function isValid(date) {
    if (date instanceof Date) {
        return !isNaN(date.getTime());
    }
    if (typeof date === 'number' && Number.isFinite(date)) {
        return true;
    }
    return false;
}

function isAfter(d1, d2) {
    if (isValid(d1) && isValid(d2)) {
        if (d1.getTime() - d2.getTime() > 0) {
            return true
        } else {
            return false
        }
    }
}