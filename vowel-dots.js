const vowels = /[aeiou]/gi
function vowelDots(s) {
    function ajouterPoint(voyelle) {
        return voyelle + "."
    }
    return s.replace(vowels, ajouterPoint)
}

console.log(vowelDots("hello world"));
// Output: 'he.llo wo.rld'

console.log(vowelDots("Vowels are fun"));
// Output: 'Vo.we.ls a.re fu.n'