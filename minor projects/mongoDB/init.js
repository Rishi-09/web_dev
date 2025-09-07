const mongoose = require("mongoose");
const Chat = require("./models/chat")

main()
.then(res=>console.log("Connection successfull!!"))
.catch(err=>console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test1");
}

const chats = [
  new Chat({
    from: "Neha",
    to: "Priya",
    msg: "Hey, how are you?",
    created_at: new Date()
  }),
  new Chat({
    from: "Arjun",
    to: "Rishi",
    msg: "Project meeting at 5?",
    created_at: new Date()
  }),
  new Chat({
    from: "Kiran",
    to: "Vikram",
    msg: "Don’t forget the notes!",
    created_at: new Date()
  }),
  new Chat({
    from: "Riya",
    to: "Meera",
    msg: "Call me when free.",
    created_at: new Date()
  }),
  new Chat({
    from: "Amit",
    to: "Sonia",
    msg: "Did you check the file?",
    created_at: new Date()
  }),
  new Chat({
    from: "Suresh",
    to: "Anjali",
    msg: "Happy Birthday ",
    created_at: new Date()
  }),
  new Chat({
    from: "Manoj",
    to: "Deepa",
    msg: "Class starts at 10.",
    created_at: new Date()
  }),
  new Chat({
    from: "Tanya",
    to: "Kabir",
    msg: "Where are you now?",
    created_at: new Date()
  }),
  new Chat({
    from: "Rahul",
    to: "Sneha",
    msg: "Let’s meet for coffee.",
    created_at: new Date()
  }),
  new Chat({
    from: "Ishaan",
    to: "Aditi",
    msg: "Movie plan tonight?",
    created_at: new Date()
  })
];



Chat.bulkSave(chats);