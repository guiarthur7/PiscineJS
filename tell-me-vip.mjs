import { readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

const dir = process.argv[2] || '.';
const files = await readdir(dir);

const names = [];

for (let i = 0; i < files.length; i++) {
  const filePath = join(dir, files[i]);
  const raw = readFileSync(filePath, 'utf8');
  const text = raw.trim();
  if (!text) continue;

  let obj;
  try {
    obj = JSON.parse(text);
  } catch (err) {
    continue;
  }

  if (obj && obj.answer === 'YES') {
    names.push(`${obj.lastname} ${obj.firstname}`);
  }
}

names.sort((a, b) => a.localeCompare(b, 'en'));

const out = names.map((n, i) => `${i + 1}. ${n}`).join('\n');
writeFileSync('vip.txt', out, 'utf8');
