const express = require("express");
const app = express();
const path = require("path");

//1. set view engine as HBS.
app.set("view engine","hbs");

//2. change name of "views" directory to "templates"
// const templatepath = path.join(__dirname,"../templates");
// app.set("views",templatepath);

app.get("/",(req,res)=>{
    res.render("index",{
        userName : "from views directory",
    });
});
app.get("/home",(req,res)=>{
    res.render("home");
}).listen(8080);