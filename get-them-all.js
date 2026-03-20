export function getArchitects() {
    const allElements = Array.from(document.body.children);
    const architects = allElements.filter(el => el.tagName === "A")
    const nonArchitects = allElements.filter(el => el.tagName !== 'A');
    return [architects, nonArchitects];
}

export function getClassical() {
    const architects = Array.from(document.getElementsByTagName('a'));
    const classical = architects.filter(el => el.classList.contains("classical"));
    const notClassical = architects.filter(el => !el.classList.contains("classical"));
    return [classical, notClassical];
}

export function getActive() {
    const classicalA = getClassical()[0]
    const isActive = classicalA.filter(el => el.classList.contains("active"))
    const isNotActive = classicalA.filter(el => !el.classList.contains("active"))
    return [isActive, isNotActive];
}

export function getBonannoPisano() {
    const classicalAactive = getActive()[0]
    const isBonanno = classicalAactive.find(el => el.id === "BonannoPisano")
    const isNotBonanno = classicalAactive.filter(el => !el.id !== "BonannoPisano")
    return [isBonanno, isNotBonanno];
}