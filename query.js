const express = require('express');
// var bodyParser = require('body-parser')
const app = express()
app.use(express.json())

app.post("/",token,(req,res)=>{
    console.log("enpoint");
    console.log(req.body);
    res.send("home")
})

app.get("/data",(req,res)=>{
    // const id = req.params
    console.log(data);
})

app.listen(3000,()=>{
    console.log("server created");
})



function token(req,res,next){
    console.log("middlle");
    console.log(req.body);
    next()
}