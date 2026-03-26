import { stylestableau } from './pimp-my-style.data.js';

let cpt = 0;
let cpt2 = 0;
export function pimp() {
    const btn = document.querySelector('.button');

    if (cpt < stylestableau.length) {
        btn.classList.add(stylestableau[cpt]);
        cpt++;
        cpt2 = cpt;
        if (cpt === stylestableau.length) {
            btn.classList.add('unpimp');
        }
    } else {
        if (cpt2 > 0) {
            btn.classList.remove(stylestableau[cpt2 - 1]);
            cpt2--;
            if (cpt2 === 0) {
                btn.classList.remove('unpimp');
                cpt = 0
            }
        }
    }
}