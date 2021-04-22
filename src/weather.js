const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const requests = require("requests");


//1. add view template
app.set("view engine","hbs");

//2. change the name of views directory to template directory
const templatePath = path.join(__dirname,"../templates");
app.set("views",templatePath);

//3. add partials 
const partialPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialPath);

app.get("/",(req,res) =>{
    res.render("index",{
        userName : "yash",
    });
});

app.get("/weather",(req,res) =>{
    requests(`http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=0faa90b27c5961aa4abd37539419fe9b`)
    .on("data", (chunk) =>{
        const objData = JSON.parse(chunk);
        const arrData = [objData];

        console.log(`City name is : ${arrData[0].name} and temp is ${(arrData[0].main.temp-273.15).toFixed(2)} °c`);

        res.write(`City name is : ${arrData[0].name} and temp is ${(arrData[0].main.temp-273.15).toFixed(2)} °c`);
        // res.render("weather",{
        //     city : req.query.city,
        //     temp : arrData[0].main.temp,
        //     max_temp : ,
        //     min_temp : ,
        // });
        res.end();

    })
    .on("err",(error) =>{
        if(error) return res.write("connection is closed due to errors :",error);

        res.end();
    });
});

app.get("*",(req,res) =>{
    res.render("404");
}).listen(8000);