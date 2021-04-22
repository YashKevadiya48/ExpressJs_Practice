const express = require("express");
const app = express();

app.get("/",(req,res) =>{
    res.json([
        {
            id : "1",
            name : "yash",
        },
        {
            id : "2",
            name : "yash",
        },
        {
            id : "3",
            name : "yash",
        },
    ]);
}).listen(8080);