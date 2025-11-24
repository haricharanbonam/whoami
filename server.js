import express from "express";
import geoip from "geoip-lite";
import { UAParser } from "ua-parser-js";

const app = express();

app.use((req, res, next) => {
  console.log(req.method + " " + req.url);
  console.log("the ip address of the guy", req.ip);

  let geo = geoip.lookup(req.ip);
  console.log(geo);

  console.log(req.get("user-agent"));

  const parser = new UAParser(req.get("user-agent"));
  const result = parser.getResult();

  console.log("--- Extracted Information ---");
  console.log("Browser Name:", result.browser.name);
  console.log("Browser Version:", result.browser.version);
  console.log("OS Name:", result.os.name);
  console.log("OS Version:", result.os.version);
  console.log("Device Type:", result.device.type);
  console.log("Device Model:", result.device.model);
  console.log("Engine:", result.engine.name);

  const forwarded = req.headers["x-forwarded-for"];
  const realIp = forwarded ? forwarded.split(",")[0] : req.ip;

  const acceptLang = req.headers["accept-language"];
  const encoding = req.headers["accept-encoding"];
  const connection = req.headers["connection"];
  const host = req.headers["host"];
  const referer = req.headers["referer"] || "None";
  const protocol = req.protocol;
  const uaString = req.get("user-agent");

  req.clientInfo = {
    ip: realIp,
    geo: geo || null,
    browser: {
      name: result.browser.name,
      version: result.browser.version,
    },
    os: {
      name: result.os.name,
      version: result.os.version,
    },
    device: {
      type: result.device.type || "unknown",
      model: result.device.model || "unknown",
    },
    engine: result.engine.name,
    headers: {
      language: acceptLang,
      encoding: encoding,
      host: host,
      referer: referer,
      connection: connection,
      protocol: protocol,
      userAgent: uaString,
    },
    timestamp: new Date().toISOString(),
  };

  next();
});

// API endpoint to get client info as JSON
app.get("/api/info", (req, res) => {
  res.json(req.clientInfo);
});
app.get("/api/info.js", (req, res) => {
  res.json({ message: "This works" });
});

app.use(express.static("public"));

app.listen(4000, () => {
  console.log("app is running perfectly fine on port 4000");
});
