import http from "node:http";
import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const PORT = 5000;
const FRIENDS = ["Caleb_Squires", "Tyrique_Dalton", "Rahima_Young"];
const PASSWORD = "abracadabra";

const GUESTS_DIR = join(process.cwd(), "guests");

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

  req.on("end", () => {
    let data;

    try {
      data = JSON.parse(body);
    } catch {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
      return;
    }

    mkdir(GUESTS_DIR, { recursive: true })
      .then(() => {
        const filePath = join(GUESTS_DIR, `${guestName}.json`);
        return writeFile(filePath, JSON.stringify(data, null, 2));
      })
      .then(() => {
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      })
      .catch(() => {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      });
  });
});

server.listen(PORT, () => {
  console.log("Server running on port 5000");
});