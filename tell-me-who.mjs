import { readdir, readFile } from "node:fs/promises";

try {
  const dirPath = process.argv[2] || ".";
  if (!dirPath) throw new Error("Please provide a directory path.");

  const files = await readdir(dirPath);
  const guests = await Promise.all(
    files.map((file) => readFile(`${dirPath}/${file}`, "utf8")),
  );

  const sortedGuests = guests.sort();
  sortedGuests.forEach((guest, i) => console.log(`${i + 1}. ${guest}`));
} catch (err) {
  console.error("Error:", err.message);
}