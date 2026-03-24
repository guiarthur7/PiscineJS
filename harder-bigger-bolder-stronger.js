export function generateLetters() {
    let size = 11;
    let result = [];
    for (let i = 1; i <= 120; i++) {
        const lettre = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        let div = document.createElement("div");
        div.textContent = lettre;
        div.style.fontSize = `${size}px`;
        if (i >= 1 && i <= 40) {
            div.style.fontWeight = "300";
        } else if (i > 40 && i <= 80) {
            div.style.fontWeight = "400";
        } else {
            div.style.fontWeight = "600";
        }
        document.body.appendChild(div);
        result.push(div);
        size += 1;
    }
    return result;
}