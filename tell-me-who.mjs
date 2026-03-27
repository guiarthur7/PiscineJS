import { readdir } from 'node:fs/promises';

const dir = process.argv[2] || '.';
const files = await readdir(dir);

const names = [];
for (const f of files) {
  const base = f.split('.')[0];
  const parts = base.split('_');
  if (parts.length === 2) {
    names.push(parts[1] + ' ' + parts[0]);
  } else {
    names.push(base);
  }
}
names.sort((a, b) => a.localeCompare(b, 'en'));

names.forEach((n, i) => console.log(`${i + 1}. ${n}`));