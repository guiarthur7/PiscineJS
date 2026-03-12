function firstDayWeek(n, s) {
    var d = new Date(s + "-01-01");
    if (n === 1) {
        var dd = d.getDate();
        if (dd < 10) dd = '0' + dd;
        var mm = d.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        var yyyy = d.getFullYear();
        return dd + '-' + mm + '-' + yyyy;
    }
    var day = d.getDay();
    var offset;
    if (day === 0) {
        offset = 1;
    } else {
        offset = 8 - day;
    }
    var firstMonday = new Date(d);
    firstMonday.setDate(d.getDate() + offset - 1);
    var mondayN = new Date(firstMonday);
    mondayN.setDate(firstMonday.getDate() + 7 * (n - 1));
    if (mondayN.getFullYear() < Number(s)) {
        mondayN = d;
    }
    var dd = mondayN.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = mondayN.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yyyy = mondayN.getFullYear();
    return dd + '-' + mm + '-' + yyyy;
}