const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({ message: "Welcome to NodeJS Express App-- Yuvraj Holkar" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// update by yuvraj Holkar