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
    if (box) {
        const b = box.getBoundingClientRect();
        let cx = x;
        let cy = y;
        if (cir.dataset.trapped === '1') {
            if (cx < b.left + 25) cx = b.left + 25;
            if (cx > b.right - 25) cx = b.right - 25;
            if (cy < b.top + 25) cy = b.top + 25;
            if (cy > b.bottom - 25) cy = b.bottom - 25;
            cir.style.left = (cx - 25) + 'px';
            cir.style.top = (cy - 25) + 'px';
            return;
        }
        cir.style.left = (x - 25) + 'px';
        cir.style.top = (y - 25) + 'px';
  
        const c = cir.getBoundingClientRect();
        const centerX = c.left + 25;
        const centerY = c.top + 25;
        const insideX = centerX > b.left + 25 && centerX < b.right - 25;
        const insideY = centerY > b.top + 25 && centerY < b.bottom - 25;
        if (insideX && insideY) {
            cir.style.background = 'var(--purple)';
            cir.dataset.trapped = '1';
        }
    } else {
        cir.style.left = (x - 25) + 'px';
        cir.style.top = (y - 25) + 'px';
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