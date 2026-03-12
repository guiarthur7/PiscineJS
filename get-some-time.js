function firstDayWeek(n, s) {
    // Crée la date du 1er janvier de l'année s
    const d = new Date(s + "-01-01");
    // Jour de la semaine (0=dimanche, 1=lundi, ...)
    let day = d.getDay();
    // Calcul du décalage pour obtenir le lundi
    let offset = (day === 0) ? 1 : (8 - day);
    // Date du premier lundi de l'année
    let firstMonday = new Date(d);
    firstMonday.setDate(d.getDate() + offset - 1);
    // Date du lundi de la semaine n
    let mondayN = new Date(firstMonday);
    mondayN.setDate(firstMonday.getDate() + 7 * (n - 1));
    // Si la semaine commence l'année précédente, retourne le 1er janvier
    if (mondayN.getFullYear() < Number(s)) {
        mondayN = d;
    }
    // Formatage en dd-mm-yyyy
    const dd = String(mondayN.getDate()).padStart(2, '0');
    const mm = String(mondayN.getMonth() + 1).padStart(2, '0');
    const yyyy = mondayN.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
}