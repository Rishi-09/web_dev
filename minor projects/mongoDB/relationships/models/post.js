const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(()=>console.log("Connection Successful!"))
    .catch((err)=>console.log(err));

async function main() {
    mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username:String,
    email:String
})

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
}); 

const User = mongoose.model("User",userSchema)
const Post = mongoose.model("Post",postSchema)

findPost = async() => {
    let post = await Post.findOne({}).populate("user","addresses");
    console.log(post);
}

findPost();