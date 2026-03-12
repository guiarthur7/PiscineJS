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

const date1 = new Date("2024-01-01");
const date2 = new Date("2023-01-01");
const invalid = new Date("invalid");

console.log(isValid(date1)); // true
console.log(isValid(invalid)); // false
console.log(isAfter(date1, date2)); // true