import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
 const connectDB = async () => {
    
 
try {
   const ConnectionInstanse= await mongoose.connect(`{$process.env.MONGODB_URL}/{$DB_NAME}`)
   console.log(`/n"database get connceted DB HOST", ${ConnectionInstanse.connection.host}`)
} catch (error) {
    console.log("Error in DB",error)
    process.exit(1)
    
}}
export default  connectDB