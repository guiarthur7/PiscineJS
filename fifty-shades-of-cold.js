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