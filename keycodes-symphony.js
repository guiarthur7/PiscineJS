export const compose = () => {
    const getColor = (key) => {
        const code = key.charCodeAt(0) - 97; // 0-25 for a-z
        const hue = (code * 360) / 26; // Distribute evenly across color spectrum
        return 'hsl(${hue}, 100%, 50%)';
    };

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key >= 'a' && key <= 'z') {
            const div = document.createElement('div');
            div.className = 'note';
            div.textContent = key;
            div.style.backgroundColor = getColor(key);
            document.body.appendChild(div);
        }
        else if (key === 'Backspace') {
            const notes = document.querySelectorAll('.note');
            if (notes.length > 0) {
                notes[notes.length - 1].remove();
            }
        }
        else if (key === 'Escape') {
            document.querySelectorAll('.note').forEach((note) => note.remove());
        }
    });
};