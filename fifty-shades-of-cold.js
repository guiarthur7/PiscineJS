import { colors } from './fifty-shades-of-cold/fifty-shades-of-cold.data.js'

export function generateClasses() {
    const head = document.head;
    const style = document.createElement('style');
    let css = '';
    for (const color of colors) {
        css += `.${color} { background: ${color}; }\n`;
    }
    style.textContent = css;
    head.appendChild(style);
}

export function generateColdShades() {
    for (const color of colors) {
        if (color == "aqua" || color == "blue" || color == "turquoise" || color == "green" || color == "cyan" || color == "navy" || color == "purple") {
            const div = document.createElement('div');
            div.classList.add(color)
            div.textContent = color;
            document.body.appendChild(div);
        }
    }
}

export function chooseShade(color) {
    const divs = document.querySelectorAll('div'); // ou un sélecteur plus précis si besoin
    for (const div of divs) {
        div.className = color;
    }
}