import fs from 'fs';
const first = process.argv[2] || '';
const text = fs.readFileSync(`${first}`, 'utf8');
let words = text.split(" ")
let res = ""
for (let i = 0; i < words.length; i++) {
    if (words[i].length % 2 !== 0) {
        res += words[i].slice((words[i].length / 2)) + words[i].slice(0, (words[i].length / 2)) + ' '
    } else {
        res += words[i].slice((words[i].length / 2)) + words[i].slice(0, words[i].length / 2) + ' '
    }
}
console.log(res.slice(0, res.length -1))