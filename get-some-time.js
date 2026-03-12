function firstDayWeek(n, s) {
    const d = new Date(s + "-01-01");
    const day = d.getDay();
    let diff;
    if (day === 0) {
        diff = 1;
    } else if (day === 1) {
        diff = 0;
    } else {
        diff = 8 - day;
    }
    if (n === 1) {
        return "01-01-" + s;
    }
    let lundi = new Date(d);
    if (diff === 0) {
        // 1er janvier est un lundi, semaine 2 = 8 janvier
        lundi.setDate(d.getDate() + 7 * (n - 1));
    } else {
        // sinon, semaine 2 = premier lundi après le 1er janvier
        lundi.setDate(d.getDate() + diff + 7 * (n - 2));
    }
    let m1 = lundi.getMonth() + 1;
    if (m1 < 10) { m1 = '0' + m1; }
    let d2 = lundi.getDate();
    if (d2 < 10) { d2 = '0' + d2; }
    return d2 + "-" + m1 + "-" + s;
}

console.log(firstDayWeek(1, "2024"));
// Output: '01-01-2024'  (since week 1 contains January 1st)

console.log(firstDayWeek(10, "2025"));
// Output: '03-03-2025'  (the Monday of week 10 in 2025)

console.log(firstDayWeek(1, "2021"));
// Output: '01-01-2021'  (week 1 starts on Friday, but we return Jan 1st)