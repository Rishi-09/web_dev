const e = require("express");
const express = require("express");
const app = express();
const ExpressError = require("../middlewares/expresserror");

app.use((req,res,next)=>{
    console.log("hii i 1st middleware");

    next();
});

// app.use((req,res,next)=>{
//     console.log("hii i 2nd middleware");
//     next();
// });

const checkToken = (req,res,next)=>{
    let { token } = req.query;  
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"NEW ACCESS DENIED!");
};


app.use("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.get("/random",(req,res)=>{
    res.send("this is a random page");
});


app.get("/err",(req,res)=>{
    kdsn = ajsa;
});


app.use((err,req,res,next)=>{
    console.log("_________ERROR_________");
    next(err);
})

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden");
})

app.use((err,req,res,next)=>{
    let {status =500 ,message} = err;
    res.status(status).send(err);
})
app.use((req,res)=>{
    res.status(404).send("page not found"); 
})

app.listen(8080,()=>{
    console.log("http://localhost:8080");
});