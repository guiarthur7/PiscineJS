import { readFileSync, writeFileSync } from "fs"

const first = process.argv[2] || "."
const second = process.argv[3] || "."
let output = process.argv[4] || "."
const r = readFileSync(first, "utf8")

if (output.length <= 2 && String(second).toLowerCase() === "encode") {
    output = "cypher.txt"
} if (output.length <= 2 && String(second).toLowerCase() === "decode") {
    output = "clear.txt"
}

if (String(second).toLowerCase() === "encode") {
    let encode = Buffer.from(r).toString('base64')
    writeFileSync(output, encode)
} else if (String(second).toLowerCase() === "decode") {
    let decode = Buffer.from(r, 'base64').toString('utf8')
    writeFileSync(output, decode)
}