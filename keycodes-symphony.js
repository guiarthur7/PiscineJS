document.addEventListener("keydown", (event) => {
    const key = event.key;
    compose(key)
});

let cpt = 0;

function compose(key) {
    if (key >= "a" && key <= "z") {
        const div = document.createElement('div')
        div.textContent = key;
        const color = '#' + (key.charCodeAt(0) * 1234567 % 0xFFFFFF).toString(16).padStart(6, '0');
        div.style.background = color;
        div.classList.add(`${cpt}`)
        document.body.appendChild(div)
        cpt ++;
    }
    if (key === "Delete") {
        if (cpt > 0) {
            cpt--;
            const last = document.getElementsByClassName(`${cpt}`)[0];
            last.remove();
        }
    }
}