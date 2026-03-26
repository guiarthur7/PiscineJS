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
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.appendChild(div);
}

export function moveCircle(x, y) {
    const cir = document.getElementsByTagName("div")[0];
    if (cir) {
        cir.style.left = x + 'px';
        cir.style.top = y + 'px';
    }
}

export function setBox() {
    
}