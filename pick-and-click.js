document.addEventListener("mousemove", (e) => {
    pick(e.clientX, e.clientY, window.innerWidth, window.innerHeight)
})

function pick(x, y, w, h) {
    const svg = document.getElementById('crosshairs');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    const hue = Math.round((x/w) * 360)
    const luminosity = Math.round((y / h) * 100);

    let str = `hsl(${hue}, 50%, ${luminosity}%)`
    document.body.style.background = str;

    if (document.querySelector(".hsl")) {
        document.querySelector(".hsl").textContent = str;
    }
    if (document.querySelector(".hue.text")) {
        document.querySelector(".hue.text").textContent = `${hue}`;
    }
    if (document.querySelector(".luminosity.text")) {
        document.querySelector(".luminosity.text").textContent = `${luminosity}`;
    }

    navigator.clipboard.writeText(str)
    .then(() => {
    })
    .catch(err => {
    });

    axisX.setAttribute('x1', x);
    axisX.setAttribute('x2', x);
    axisX.setAttribute('y1', 0);
    axisX.setAttribute('y2', h);

    axisY.setAttribute('x1', 0);
    axisY.setAttribute('x2', w);
    axisY.setAttribute('y1', y);
    axisY.setAttribute('y2', y);
}