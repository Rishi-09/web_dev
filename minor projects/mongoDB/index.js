const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat");
const methodoverride = require("method-override");
const { listeners } = require("process");
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(methodoverride("_method"));
const ExpressError = require("./ExpressError");

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

app.get("/chats/new",(req,res)=>{
    res.render("newChatForm.ejs")
})

app.post("/chats",(req,res)=>{
    let { from,to,msg } = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save()
    .then((res)=>{
        console.log("Chat saved");
    })
    .catch(err=>{console.log(err)});
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async (req,res)=>{
    let { id } = req.params;
    
    let oldChat = await Chat.findById(id);
    
    res.render("editForm.ejs",{ oldChat });
})


//Show route
app.get("/chats/:id",async (req,res,next)=>{
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if(!chat){
        next( new ExpressError(404,"Chat not found"));
    }
    res.render("editForm",{ chat });
})


app.put("/chats/:id",async (req,res)=>{
    let { id } = req.params;
    let { newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id,{msg:newMsg},{new:true});
    res.redirect("/chats");
    })
app.delete("/chats/:id", async (req,res)=>{
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})

app.use((err,req,res,next)=>{
    let { status = 500, message="Some Error Occured"} = err;
    res.status(status).send(message);
})
app.listen(8080,()=>{
    console.log("http://localhost:8080");
})