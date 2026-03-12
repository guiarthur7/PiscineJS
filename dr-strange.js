function addWeek(date) {
    const tab = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
        "secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
        "secondFriday", "secondSaturday", "secondSunday"
    ];
    const jour1 = date.getTime()
    const jour = new Date("0001-01-01").getTime()
    let res = (jour1 - jour)/86400000
    res = res%14
    return tab[res]
}

function timeTravel( {date, hour, minute, second }) {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}

console.log(addWeek(new Date("0001-01-01"))); // Output: 'Monday'
console.log(addWeek(new Date("0001-01-02"))); // Output: 'Tuesday'
console.log(addWeek(new Date("0001-01-07"))); // Output: 'Sunday'
console.log(addWeek(new Date("0001-01-08"))); // Output: 'secondMonday'
console.log(addWeek(new Date("0001-01-09"))); // Output: 'secondTuesday'
console.log(timeTravel({
  date: new Date("2020-05-29 23:25:22"),
  hour: 21,
  minute: 22,
  second: 22,
}).toString());