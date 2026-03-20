function getArchitects() {
    const allElements = Array.from(document.body.children);
    const architects = allElements.filter(el => el.tagName == "a")
    const nonArchitects = allElements.filter(el => el.tagName !== 'A');
    return [architects, nonArchitects];
}