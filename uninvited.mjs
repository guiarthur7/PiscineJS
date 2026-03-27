import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const GUESTS_DIR = "./guests";

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    if (req.method === "POST") {
      const guestName = (req.url || '').slice(1);
      if (!guestName) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'guest not found' }));
        return;
      }

      let body = '';
      req.on('data', (chunk) => { body += chunk });

      req.on('end', async () => {
        try {
          const filePath = join(GUESTS_DIR, `${guestName}.json`);
          await mkdir(GUESTS_DIR, { recursive: true });
          await writeFile(filePath, body, 'utf8');
          res.statusCode = 201;
          res.end(JSON.stringify({}));
        } catch {
          res.statusCode = 500;
          res.end(JSON.stringify({ error: 'server failed' }));
        }
      });
    } else {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  } catch {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});