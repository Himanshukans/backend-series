import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`
    ); // this is from mongoose, it will log the host of the connected database to the console. \n means new line, so it will print the message in a new line.
  } catch (error) {
    console.log("mongoDB connection error: ", error);
    process.exit(1); // this is from nodejs, it will exit the process with failure
  }
}; // async function returs all the promises, so we can use await to wait for the connection to be established before moving on to the next line of code.

export default connectDB;
