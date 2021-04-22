const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.send("<h1>Server is started using expressJs.</h1>");
});

app.get("/about",(req,res) =>{
    res.status(404).send("<h1>This is about page.</h1>");
});

app.get("/contect",(req,res) =>{
    res.send("<h1>This is contect us page.</h1>");
});

app.get("/temp",(req,res) =>{
    res.send("<h1>This is temp page.</h1>")
}).listen(8080);