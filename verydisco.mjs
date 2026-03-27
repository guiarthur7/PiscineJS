const first = process.argv.slice(2).join(' ');
let words = first.split(" ")
let res = ""
for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
        res += words[i].slice((words[i].length / 2) + 1) + words[i].slice(0, (words[i].length / 2) + 1) + ' '
    } else {
        res += words[i].slice((words[i].length / 2)) + words[i].slice(0, words[i].length / 2) + ' '
    }
}
console.log(res)