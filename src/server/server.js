const express = require("express");
const app = express();
const { renderer } = require("./renderer");
const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

app.get("/", (req, res) => {
   res.send(renderer());
});