import mongoose from "mongoose";

export const connectDB = async() => {
  await mongoose.connect('mongodb+srv://miracle:512456@cluster0.dmra1.mongodb.net/food-del').then(() => console.log("DB Connected Successfully!"))
}