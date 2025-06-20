import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    console.log(`\n✅ Database connected to DB HOST: ${ConnectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ Error in DB", error);
    process.exit(1);
  }
};

export default connectDB;
