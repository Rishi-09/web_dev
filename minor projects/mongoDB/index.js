const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");


main().then(()=>console.log("connection Successfull"))
.catch(err=> console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test1");
}


app.get("/",(req,res)=>{
    res.send("yyaaannnn!");
})
app.get("/chats",async (req,res)=>{
    const chats = await Chat.find();
    res.render("chats.ejs", { chats })
    
})
app.listen(8080,()=>{
    console.log("http://localhost:8080");
})