let currentHsl = '';

document.addEventListener('mousemove', (e) => {
    pick(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
});

document.addEventListener('click', () => {
    if (!currentHsl) return;
    navigator.clipboard.writeText(currentHsl).catch(() => {});
});

function pick(x, y, w, h) {
    const svg = document.getElementById('crosshairs');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    const hue = Math.round((x / w) * 360);
    const luminosity = Math.round((y / h) * 100);

    const hslStr = `hsl(${hue}, 50%, ${luminosity}%)`;
    const s = 50 / 100;
    const l = luminosity / 100;

    function hslToRgb(h, s, l) {
        const c = (1 - Math.abs(2 * l - 1)) * s;
        const hh = h / 60;
        const x = c * (1 - Math.abs((hh % 2) - 1));
        let r1 = 0, g1 = 0, b1 = 0;
        if (hh >= 0 && hh < 1) { r1 = c; g1 = x; b1 = 0; }
        else if (hh >= 1 && hh < 2) { r1 = x; g1 = c; b1 = 0; }
        else if (hh >= 2 && hh < 3) { r1 = 0; g1 = c; b1 = x; }
        else if (hh >= 3 && hh < 4) { r1 = 0; g1 = x; b1 = c; }
        else if (hh >= 4 && hh < 5) { r1 = x; g1 = 0; b1 = c; }
        else { r1 = c; g1 = 0; b1 = x; }
        const m = l - c / 2;
        const r = Math.round((r1 + m) * 255);
        const g = Math.round((g1 + m) * 255);
        const b = Math.round((b1 + m) * 255);
        return { r, g, b };
    }

    const { r, g, b } = hslToRgb(hue, s, l);
    const rgbStr = `rgb(${r}, ${g}, ${b})`;

    document.body.style.background = rgbStr;
    currentHsl = rgbStr;

    const hslDiv = document.querySelector('.hsl');
    if (hslDiv) hslDiv.textContent = str;

    const hueDiv = document.querySelector('.hue.text');
    if (hueDiv) hueDiv.textContent = hue;

    const lumDiv = document.querySelector('.luminosity.text');
    if (lumDiv) lumDiv.textContent = luminosity;

    if (axisX) {
        axisX.setAttribute('x1', x);
        axisX.setAttribute('x2', x);
        axisX.setAttribute('y1', 0);
        axisX.setAttribute('y2', h);
    }
    if (axisY) {
        axisY.setAttribute('x1', 0);
        axisY.setAttribute('x2', w);
        axisY.setAttribute('y1', y);
        axisY.setAttribute('y2', y);
    }
}