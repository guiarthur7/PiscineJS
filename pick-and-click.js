document.addEventListener("mousemove", (e) => {
    pick(e.screenX, e.screenY, window.innerWidth, window.innerWidth)
})

export function pick(x, y, w, h) {
    const svg = document.getElementById('crosshairs');
    const axisX = document.getElementById('axisX');
    const axisY = document.getElementById('axisY');

    const hue = Math.round((x/w) * 360)
    const luminosity = Math.round((y / h) * 100);

    let str = `hsl(${hue}, 50%, ${luminosity}%)`
    document.body.style.backgroundColor = str;

    const div1 = document.createElement('div')
    div1.classList.add('hsl')
    div1.textContent(str)

    const div2 = document.createElement('div')
    div2.classList.add('hue text')
    div2.textContent(`${hue}`)

    const div3 = document.createElement('div')
    div3.classList.add("luminosity text")
    div2.textContent(`${luminosity}`)

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