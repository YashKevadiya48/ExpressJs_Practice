const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const { partials } = require("handlebars");

//1. set view engine as HBS.
app.set("view engine","hbs");

//2. change name of "views" directory to "templates"
const templatePath = path.join(__dirname,"../templates");
app.set("views",templatePath);

//3. add partial 
const partialPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialPath);

app.get("/",(req,res) =>{
    res.render("index",{
        userName : "from Templates",
    });
});

app.get("/home",(req,res) =>{
    res.render("home");
});

app.get("*",(req,res) =>{
    res.render("404",{
        errorMsg : "Opps, This page is not found."
    });
}).listen(8080);