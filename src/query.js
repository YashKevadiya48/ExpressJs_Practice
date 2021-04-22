const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const { partials } = require("handlebars");

//1. set  view engine
app.set("view engine","hbs");

//2. change the name of views to templates.

const templatePath = path.join(__dirname,"../templates");
app.set("views",templatePath);

//3. Register partials 

const partialPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialPath);

app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/home",(req,res) =>{
    res.render("home",{
        name : req.query.name,
        age : req.query.age,
    });
});

app.get("*",(req,res) =>{
    res.render("404",{
        errorMsg : "opps! This file is not found.",
    });
}).listen(8000);