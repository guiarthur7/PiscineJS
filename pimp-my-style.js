import { styles } from './pimp-my-style/pimp-my-style.data.js';

let cpt = 0;
let cpt2 = 0;
export function pimp() {
    const btn = document.querySelector('.button');

    if (cpt < styles.length) {
        btn.classList.add(styles[cpt]);
        cpt++;
        cpt2 = cpt;
        if (cpt === styles.length) {
            btn.classList.add('unpimp');
        }
    } else {
        if (cpt2 > 0) {
            btn.classList.remove(styles[cpt2 - 1]);
            cpt2--;
            if (cpt2 === 0) {
                btn.classList.remove('unpimp');
                cpt = 0
            }
        }
    }
}