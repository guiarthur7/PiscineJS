import http from "node:http";

const PORT = 5000;

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
      server.close();
      return;
    }

    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      } catch {
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "server failed" }));
      }
      server.close(); 
    });
  } else {
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "server failed" }));
    server.close();
  }
});

server.listen(PORT);
