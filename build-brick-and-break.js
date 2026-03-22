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

document.addEventListener('DOMContentLoaded', () => {
  const hammer = document.getElementById('hammer');
  if (hammer) {
    hammer.addEventListener('click', () => {
      const reparations = document.body.dataset.reparations;
      if (reparations) {
        const ids = reparations.split(',');
        repair(...ids);
      }
    });
  }
});