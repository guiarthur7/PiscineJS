function matchCron(cron, date) {
    let fields = cron.split(" ");

    let d1 = []
    d1.push(date.getMinutes(), date.getHours(), date.getDate(), date.getMonth(), date.getDay())

    let cpt = 0
    let cpt2 = 0

    for (let i = 0; i < fields.length; i++) {
        if (fields[i] !== "*") {
            cpt += 1
        } if (d1[i] == fields[i]) {
            cpt2 += 1
        }
    }
    return cpt === cpt2
}

console.log(matchCron("9 * * * *", new Date("2020-05-30 18:09:00"))); // true
console.log(matchCron("9 * * * *", new Date("2020-05-30 19:09:00"))); // true
console.log(matchCron("9 * * * *", new Date("2020-05-30 19:21:00"))); // false