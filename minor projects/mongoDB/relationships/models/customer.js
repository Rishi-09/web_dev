const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

async function main() {
  mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const orderSchema = new Schema({
  item: String,
  price: Number,
});


const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"Order"
        },
    ],
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomers = async() =>{
    let cust1 = new Customer({

        name:"Anony",
        orders:[]
    })
}



// const addOrders = async () => {
//  let result = await Order.insertMany([
//     {item: "Lamp",price: 2000,},
//     {item: "Phone",price: 20000,}
//   ]);
//   console.log(result);
// };

// addOrders();
