function generateLetters() {
    let size = 11;
    for (let i = 1; i <= 120; i ++) {
        const lettre = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        div = document.createElement("div")
        document.body.appendChild(div);
        div.textContent = lettre;
        div.style.fontSize = `${size}`
        if (i >= 1 && i <= 40) {
            div.style.fontWeight = "300";
        } else if (i > 40 && i <= 80) {
            div.style.fontWeight = "400";
        } else {
            div.style.fontWeight = "600";
        }
        size += 1
    }
}