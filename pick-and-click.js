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

    const str = `hsl(${hue}, 50%, ${luminosity}%)`;

    document.body.style.background = str;
    currentHsl = str;

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