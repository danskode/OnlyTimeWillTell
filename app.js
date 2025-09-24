const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/public/index.html");
});

app.get("/zulu", (req, res) => {
  const now = new Date().toISOString();
  res.send({ time: now });
});

app.get("/utc", (req, res) => {
  const now = new Date().toUTCString();
  res.send({ time: now });
});

app.get("/iso", (req, res) => {
  const now = new Date().toISOString();
  res.send({ time: now });
});

app.get("/localtoserver", (req, res) => {
  const now = new Date().toString();
  res.send({ time: now });
});

app.get("/local", (req, res) => {
  const now = new Date();
  const localTime = now.toLocaleString("da-DK", {
    timeZone: "Europe/Copenhagen",
  });
  res.send({ time: localTime });
});

app.get("/isitfriday", (req, res) => {
  const today = new Date();
  const options = { weekday: "long" };
  const dayName = new Intl.DateTimeFormat("en-US", options).format(today);

  if (dayName === "Friday") {
    res.send({ data: "Yes, it's Friday!" });
  } else {
    res.send({ data: `No, today is ${dayName}.` });
  }
});

const PORT = 8080;

app.listen(PORT, (error) => {
  if (error) {
    console.log("Server is not running on PORT", PORT, error);
  }
  console.log("Server is up on PORT", PORT);
});
