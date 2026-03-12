function isValid(date) {
    if (isNaN(date)) {
        return false
    } else {
        return true
    }
}


const date1 = new Date("2024-01-01");
const date2 = new Date("2023-01-01");
const invalid = new Date("invalid");

console.log(isValid(date1)); // true
console.log(isValid(invalid)); // false