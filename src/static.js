const express = require("express");
const app = express();
const path = require("path");

const staticpath = path.join(__dirname,"../public");
console.log(path.join(__dirname,"../public"));


app.use(express.static(staticpath));

app.listen(8080);