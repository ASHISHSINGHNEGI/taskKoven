import mongoose from "mongoose";
const DB = "test1";
const URI = "mongodb://127.0.0.1:27017/";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(URI + DB);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
