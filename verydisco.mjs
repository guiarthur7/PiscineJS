const first = process.argv[2];
let words = first.split(" ")
let res = ""
for (let i = 0; i < words.length; i++) {
    if (words[i].length%2 !== 0) {
        res += words[i].slice((first.length/2) + 1) + first.slice(0, first.length/2 + 1)
    } else {
        res += words[i].slice((first.length/2)) + first.slice(0, first.length/2)
    }
    console.log(res)
}