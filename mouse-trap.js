document.addEventListener('click', (e) => {
    createCircle(e.clientX, e.clientY);
});

document.addEventListener('mousemove', (e) => {
    moveCircle(e.clientX, e.clientY);
});

export function createCircle(x, y) {
    const div = document.createElement('div');
    div.classList.add('circle');
    div.style.background = 'white';
    div.style.position = 'absolute';
    div.style.left = (x - 25) + 'px';
    div.style.top = (y - 25) + 'px';
    document.body.appendChild(div);
}

export function moveCircle(x, y) {
    const circles = document.getElementsByClassName("circle");
    if (!circles.length) return;
    const cir = circles[circles.length - 1];
    const box = document.getElementsByClassName("box")[0];
    if (cir.dataset.trapped === '1') return;

    cir.style.left = (x - 25) + 'px';
    cir.style.top = (y - 25) + 'px';

    if (box) {
        const c = cir.getBoundingClientRect();
        const b = box.getBoundingClientRect();
        if (
            c.left > b.left + 1 &&
            c.top > b.top + 1 &&
            c.right < b.right - 1 &&
            c.bottom < b.bottom - 1
        ) {
            cir.style.background = 'var(--purple)';
            cir.dataset.trapped = '1';
        }
    }
}

export function setBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.position = 'absolute';

    const width = window.innerWidth * 0.25;
    const height = window.innerHeight * 0.25;
    box.style.width = width + 'px';
    box.style.height = height + 'px';

    box.style.left = `calc(50% - ${width / 2}px)`;
    box.style.top = `calc(50% - ${height / 2}px)`;
    document.body.appendChild(box);
}