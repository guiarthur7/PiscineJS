import { readdir } from "node:fs/promises";

const dirPath = process.argv[2] || ".";

try {
  const files = await readdir(dirPath);
  console.log(files.length);
} catch (error) {
  console.error("Error reading directory:", error.message);
}