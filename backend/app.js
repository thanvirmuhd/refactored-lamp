const express = require("express");
const app = express();

require("./connection/connect");

app.get("/",(req,res)=>{
    res.send("hello");
});

app.listen(1000,()=>{
    console.log('Server is running on port 1000');
});