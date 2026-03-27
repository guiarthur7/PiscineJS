import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const GUESTS_DIR = "./guests";
const FRIENDS = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const PASSWORD = "abracadabra";

function isAuthorized(authHeader) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return false;
  try {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("utf8");
    const [username, password] = credentials.split(":");
    return FRIENDS.includes(username) && password === PASSWORD;
  } catch {
    return false;
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.statusCode = 500;
    return res.end(JSON.stringify({ error: "server failed" }));
  }

  if (!isAuthorized(req.headers.authorization)) {
    res.statusCode = 401;
    return res.end("Authorization Required");
  }

  const guestName = req.url.slice(1);
  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      await mkdir(GUESTS_DIR, { recursive: true });
      const data = JSON.parse(body || "{}");
      const filePath = join(GUESTS_DIR, `${guestName}.json`);
      
      await writeFile(filePath, JSON.stringify(data, null, 2));

      res.statusCode = 200;
      res.end(JSON.stringify(data));
    } catch (err) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  });

  req.on("error", () => {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});