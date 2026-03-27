import http from "node:http";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const GUESTS_DIR = "./guests";

const FRIENDS = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const PASSWORD = "abracadabra";

function isAuthorized(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;

  const base64 = authHeader.split(" ")[1];
  const decoded = Buffer.from(base64, "base64").toString("utf8");

  const [username, password] = decoded.split(":");

  return FRIENDS.includes(username) && password === PASSWORD;
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
    return;
  }

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
      const filePath = join(GUESTS_DIR, `${guestName}.json`);

      await writeFile(filePath, body);

      res.statusCode = 200;
      res.end(body);
    } catch {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});