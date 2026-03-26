document.addEventListener("click", (e) => {
    let x = e.clientX;
    let y = e.clientY;
    creatCircle(x, y)
})

export function creatCircle(x, y) {
    const div = document.createElement('div')
    div.classList.add('circle')
    div.style.background = 'white'
    div.style.position = 'absolute';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    document.body.appendChild(div)
}

export function moveCircle() {

}

export function setBox() {

}