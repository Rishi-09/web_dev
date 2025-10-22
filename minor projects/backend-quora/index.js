const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4:uuidv4 }= require("uuid");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended : true }));
app.use(methodOverride("_method")); 

    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"views"));
    app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {   
        id:uuidv4(),
        username:"first",
        content:"first content"
    },

    {
        id:uuidv4(),
        username:"second",
        content:" second content"
    },
    {   
        id:uuidv4(),
        username:"third",
        content:" third content"
    }
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
});

app.get("/posts/new",(req,res)=>{
    res.render("form.ejs");
});

app.post("/posts",(req,res)=>{
    let { username , content}=req.body;
    let id = uuidv4();
    posts.push({ id ,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("show.ejs",{post});
    
});
app.patch("/posts/:id",(req,res)=>{
    let newContent = req.body.content;
    let { id } = req.params;    
    let post = posts.find((p)=>id===p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})

app.delete("/posts/:id",(req,res)=>{
    let { id } = req.params;
    posts = posts.filter((p)=> id!==p.id);
    res.redirect("/posts")
})

app.get("/posts/:id/edit",(req,res)=>{ 
    let {id}=req.params;
    let post = posts.find((p)=>id===p.id);
    res.render("edit.ejs",{post});
})


app.listen(port,()=>{
    console.log(`listening to port:${port}`)
});