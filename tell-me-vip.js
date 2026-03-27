import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

try {
  const dirPath = process.argv[2];
  if (!dirPath) throw new Error("Please provide a directory path.");

  const files = await readdir(dirPath);
  const guests = await Promise.all(
    files.map(async (file) => {
      const content = await readFile(join(dirPath, file), "utf8");
      return JSON.parse(content);
    }),
  );

  const vipGuests = guests
    .filter((g) => g.answer === "YES")
    .sort(
      (a, b) =>
        a.lastname.localeCompare(b.lastname) ||
        a.firstname.localeCompare(b.firstname),
    );

  const output = vipGuests
    .map((g, i) => `${i + 1}. ${g.lastname} ${g.firstname}`)
    .join("\n");

  await writeFile("vip.txt", output);
  console.log("VIP list saved to vip.txt");
} catch (err) {
  console.error("Error:", err.message);
}