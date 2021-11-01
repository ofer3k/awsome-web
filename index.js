const express = require("express");
const app = express();

const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("hello world");
});
app.get("/data", (req, res) => {
  res.send({ name: "ofer" });
});
app.get("dataJson", (req, res) => {
  res.send(JSON.stringify({ name: "ofer" }));
});
app.listen(port, () => {
  console.log(`Running on ${port}`);
});
