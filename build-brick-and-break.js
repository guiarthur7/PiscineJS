let cpt = 1;

export function build(nbBrique) {
    let cpt1 = 1
    const interval = setInterval(() => {
        if (cpt > nbBrique) {
            clearInterval(interval)
            return;
        }
        const div = document.createElement("div");
        div.id = `brick-${cpt}`
        if (cpt%3===1) {
            div.setAttribute('foundation', 'true')
        }
        document.body.appendChild(div);
        cpt1 += 1;
        cpt += 1;
    }
    , 100);
}

export function repair(ids) {
    ids.array.forEach(id => {
        const brick = document.getElementById(id);
        if (brick.getAttribute("foundation") === "true") {
            brick.setAttribute('repaired', 'in progress')
        } else {
            brick.setAttribute('repaired', 'true')
        }
    });
}

export function destroy() {
    const div = document.getElementById(`brick-${cpt}`)
    div.remove()
    cpt -= 1
}