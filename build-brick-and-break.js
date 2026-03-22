let cpt = 1;

export function build(nbBrique) {
    let cpt1 = 1
    const interval = setInterval(() => {
        if (cpt > nbBrique) {
            clearInterval(interval)
            return;
        }
        const div = document.createElement("div");
        div.id = `brick-${cpt1}`
        if (cpt1%3===2) {
            div.setAttribute('data-foundation', 'true')
        }
        document.body.appendChild(div);
        cpt1 += 1;
        cpt += 1;
    }
    , 100);
}

export function repair(...ids) {
  document.querySelectorAll('div[data-repaired]').forEach(div => {
    div.removeAttribute('data-repaired');
  });
  ids.flat().forEach(id => {
    const brick = document.getElementById(id);
    if (!brick) return;
    if (brick.getAttribute('data-foundation') === "true") {
      brick.setAttribute('data-repaired', 'in progress');
    } else {
      brick.setAttribute('data-repaired', 'repaired');
    }
  });
}

export function destroy() {
    const div = document.getElementById(`brick-${cpt}`)
    div.remove()
    cpt -= 1
}