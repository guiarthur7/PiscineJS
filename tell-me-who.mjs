import { readdir, readFile } from "node:fs/promises";

try {
  const dirPath = process.argv[2] || ".";
  if (!dirPath) throw new Error("Please provide a directory path.");

  const files = await readdir(dirPath);
  const contents = await Promise.all(
    files.map((file) => readFile(`${dirPath}/${file}`, 'utf8')),
  );

  const names = contents.map((c) => c.trim()).sort((a, b) => a.localeCompare(b, 'en'));
  names.forEach((name, i) => console.log(`${i + 1}. ${name}`));
} catch (err) {
  console.error("Error:", err.message);
}