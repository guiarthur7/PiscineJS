const normal = /hi/
const begin = /^hi/
const end = /hi$/
const beginEnd = /^hi$/

console.log(normal.test("oh hi there"));
console.log(begin.test("hi there")); // true
console.log(end.test("say hi")); // true
console.log(beginEnd.test("hi")); // true
console.log(beginEnd.test("hiya")); // false