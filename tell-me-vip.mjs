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

  if (String(obj.answer).toLowerCase() === 'yes') {
    const hasNames = obj.firstname || obj.lastname;
    if (hasNames) {
      names.push(`${obj.lastname || ''} ${obj.firstname || ''}`.trim());
    } else {
      const file = files[i].split('.')[0];
      const parts = file.split('_');
      const first = parts[0] || '';
      const last = parts[1] || '';
      const derived = (last + ' ' + first).trim();
      if (derived) names.push(derived);
    }
  }
}

names.sort((a, b) => a.localeCompare(b, 'en'));

const out = names.map((n, i) => `${i + 1}. ${n}`).join('\n');
writeFileSync('vip.txt', out, 'utf8');
if (out.length) process.stdout.write(out);
