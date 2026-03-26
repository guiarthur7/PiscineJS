import { colors } from './fifty-shades-of-cold.data.js'

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
        const coldWords = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple'];
        if (coldWords.some(word => color.includes(word))) {
            const div = document.createElement('div');
            div.classList.add(color)
            div.textContent = color;
            document.body.appendChild(div);
        }
    }
}

export function choseShade(color) {
    const divs = document.querySelectorAll('div');
    for (const div of divs) {
        div.className = color;
    }
}

generateClasses();