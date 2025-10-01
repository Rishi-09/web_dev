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


// customerSchema.pre("findOneAndDelete",async ()=>{
//   console.log("Pre middleware");
// })
customerSchema.post("findOneAndDelete",async (customer)=>{
  if(customer.orders.length){
     await Order.deleteMany({_id: { $in: customer.orders}});
  }
})

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const delCust = async() =>{
    let result = await Customer.findByIdAndDelete({_id:'68dd134e5ea6585a6af508ec'});
    console.log(result);
}


delCust();

const addCustomer = async(name,orders) =>{
    let newCust = new Customer({
      name:"Karan"
    })

    let newOrder = new Order({
      item:"Samosa",
      price:10
    })

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();
    console.log("Added new Customer");
}

// addCustomer();