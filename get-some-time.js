function firstDayWeek(n, s) {
    const d = new Date(s + "-01-01")
    const day = d.getDay()
    let diff = 0
    if (day === 0) {
        diff = 1
    } if (day === 1) {
        diff = 0
    } else {
        diff = 7 - day
    }
    if (n === 1) {
        let m = d.getMonth() + 1
        if (m < 10) {m = '0' + m}
        let d1 = d.getDate()
        if (d1 < 10) {d1 = '0' + d1}
        return d1 + "-" + m + "-" + s
    }
    let lundi = new Date(d);
    lundi.setDate(d.getDate() + diff + 7 * (n - 2));

    let m1 = lundi.getMonth() + 1
    if (m1<10) {m1 = '0' + m1}
    let d2 = lundi.getDate()
    if (d2<10) {d2 = '0' + d2}
    return d2 + "-" + m1 + "-" + s
}