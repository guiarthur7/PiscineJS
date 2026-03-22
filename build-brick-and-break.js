let cpt = 1;

export function build(nbBrique) {
    let cpt1 = 0
    const interval = setInterval(() => {
        if (cpt >= nbBrique) {
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
    if (brick.dataset.foundation === "true") {
      brick.dataset.repaired = 'in progress';
    } else {
      brick.dataset.repaired = 'repaired';
    }
  });
}

export function destroy() {
    const div = document.getElementById(`brick-${cpt-1}`)
    div.remove()
    cpt -= 1
}