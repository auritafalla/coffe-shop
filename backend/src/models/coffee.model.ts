import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

export default mongoose.model("Coffee", coffeeSchema);
