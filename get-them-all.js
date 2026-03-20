// Retourne un tableau contenant deux tableaux :
// [ [architects], [non-architects (un sur deux)] ]
export const getArchitects = () => {
    // Tous les <a>
    const architects = Array.from(document.getElementsByTagName('a'));
    // Tous les enfants du body
    const allElements = Array.from(document.body.children);
    // Non-architectes : un sur deux (index impair)
    const nonArchitects = allElements.filter((el, idx) => idx % 2 === 1);
    return [architects, nonArchitects];
};