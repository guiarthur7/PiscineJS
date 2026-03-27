import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const GUESTS_DIR = "./guests";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
    return;
  }

  const guestName = (req.url || '').slice(1);
  if (!guestName) {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
    return;
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', async () => {
    let data;
    try {
      data = JSON.parse(body);
    } catch {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
      return;
    }
    try {
      await mkdir(GUESTS_DIR, { recursive: true });
      const filePath = join(GUESTS_DIR, `${guestName}.json`);
      await writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
      res.statusCode = 201;
      res.end(JSON.stringify(data));
    } catch {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});