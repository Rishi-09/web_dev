const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection successful!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const usrSchema = new Schema({
  username: String,
  addresses: [
    {   _id:false,
      location: String,
      city: String,
    },
  ],
});
const User = mongoose.model("User", usrSchema);

const addUser = async () => {
  let user1 = new User({
    username: "Rishi",
    addresses: [
      { 
        location: "141, abc colony ",
        city: "Jalandhar",
      },
      { 
        location:"787 njdasj",
        city:"Palakpur"
      },
    ],
  });
    let result = await user1.save();
    console.log(result);
};

addUser();