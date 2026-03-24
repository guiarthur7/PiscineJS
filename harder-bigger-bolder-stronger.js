export function generateLetters() {
    let size = 11;
    let result = [];
    for (let i = 1; i <= 120; i++) {
        const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        result.push({ letter, size });
        size += 1;
    }
    return result;
}