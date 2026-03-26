document.addEventListener("mousemove", (e) => {
    pick(e.clientX, e.clientY, window.innerWidth, window.innerHeight);
});

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(Math.min(k(n) - 3, 9 - k(n)), 1));
    return [
        Math.round(255 * f(0)),
        Math.round(255 * f(8)),
        Math.round(255 * f(4))
    ];
}

function pick(x, y, w, h) {
    const svg = document.getElementById('crosshairs');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    const hue = Math.round((x / w) * 360);
    const luminosity = Math.round((y / h) * 100);

    const [r, g, b] = hslToRgb(hue, 50, luminosity);
    document.body.style.background = `rgb(${r},${g},${b})`;

    const str = `hsl(${hue}, 50%, ${luminosity}%)`;
    const hslDiv = document.querySelector('.hsl');
    if (hslDiv) hslDiv.textContent = str;

    const hueDiv = document.querySelector('.hue.text');
    if (hueDiv) hueDiv.textContent = hue;

    const lumDiv = document.querySelector('.luminosity.text');
    if (lumDiv) lumDiv.textContent = luminosity;

    axisX.setAttribute('x1', x);
    axisX.setAttribute('x2', x);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', h);

    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', w);
    axisY.setAttribute('y1', y);
    axisY.setAttribute('y2', y);
}
