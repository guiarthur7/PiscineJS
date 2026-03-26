const first = process.argv[2];
if (first.length%2 !== 0) {
    console.log(first.slice((first.length/2) + 1) + first.slice(0, first.length/2 + 1))
} else {
    console.log(first.slice((first.length/2)) + first.slice(0, first.length/2))
}