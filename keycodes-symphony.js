document.addEventListener("keydown", (event) => {
    compose(event);
});

function compose(event) {
    const key = event.key;
    if (key.length === 1 && ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z'))) {
        const div = document.createElement('div');
        div.classList.add('note');
        div.textContent = key;
        const color = '#' + (key.charCodeAt(0) * 1234567 % 0xFFFFFF).toString(16).padStart(6, '0');
        div.style.background = color;
        document.body.appendChild(div);
    } else if (key === "Backspace") {
        const notes = document.getElementsByClassName('note');
        if (notes.length > 0) {
            notes[notes.length - 1].remove();
        }
        
    } else if (key === "Escape") {
        const notes = document.getElementsByClassName('note');
        while (notes.length > 0) {
            notes[0].remove();
        }
    }
}