import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const GUESTS_DIR = "guests";
const FRIENDS = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const PASSWORD = "abracadabra";

function isAuthorized(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;
  const base64Credentials = authHeader.split(" ")[1];
  const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
  const [username, password] = credentials.split(":");
  return FRIENDS.includes(username) && password === PASSWORD;
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    if (!isAuthorized(req.headers.authorization)) {
      res.statusCode = 401;
      res.end("Authorization Required");
      return;
    }

    const guestName = req.url.slice(1);
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      try {
        const data = JSON.parse(body);
        const filePath = join(GUESTS_DIR, `${guestName}.json`);
        await mkdir(GUESTS_DIR, { recursive: true });
        await writeFile(filePath, JSON.stringify(data, null, 2));
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data));
      } catch {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      }
    });
  } else {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});