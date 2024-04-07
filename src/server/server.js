const express = require("express");
const app = express();
const { renderer } = require("./renderer");
const port = process.env.PORT || 3000;

app.use(express.static("../"));

app.listen(port, () => {
   console.log(`The app server is running on port: ${port}`);
});

app.get("/", (req, res) => {
   console.log('processing request');
   res.send(renderer());
   console.log('processed');
})
.get('/bundle.js',(req, res)=>{
   res.sendFile(__dirname+ '/bundle.js')
})