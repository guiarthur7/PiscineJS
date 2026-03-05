const dnaToRna = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
}

const rnaToDna = {
    'C': 'G',
    'G': 'C',
    'A': 'T',
    'U': 'A'
}

function RNA(s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        res += dnaToRna[s[i]]
    }
    return res
}

function DNA(s) {
    let res = ""
    for (let i = 0; i < s.length; i++) {
        res += rnaToDna[s[i]]
    }
    return res
}

console.log(RNA("GCTA"));
console.log(DNA("CGAU"));