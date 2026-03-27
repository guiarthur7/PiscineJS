import { readFileSync, writeFileSync } from "fs"

const first = process.argv[2] || "."
const second = process.argv[3] || "."
const r = readFileSync(first, "utf8")

if (String(second).toLowerCase() === "encode") {
    let encode = Buffer.from(r).toString('base64')
    writeFileSync("cypher.txt", encode)
} else if (String(second).toLowerCase() === "decode") {
    let decode = Buffer.from(r, 'base64').toString('utf8')
    writeFileSync("clear.txt", decode)
}