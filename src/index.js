// require('dotenv').config({path: './.env'})

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at Port: ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("MONGO-DB connection failed: ", err);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import connectDB from "./db/index.js";

// connectDB(); // this is a function call to connectDB which is defined in db/index.js. It will connect to the MongoDB database using the connection string defined in the .env file and the DB_NAME constant defined in constants.js.

// APPROACH 1: Using async/await with try/catch for error handling
/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    }); // this is part of express.js error handling. It listens for the "error" event on the app instance and logs the error to the console.

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    }); // this is part of express.js listening. It listens for incoming requests on the specified port and logs a message to the console.
  } catch (error) {
    console.log("Error: ", error);
  }
})(); // this is an IIFE (Immediately Invoked Function Expression) which is used to run the code inside it immediately after its definition. It is often used to create a new scope and avoid polluting the global namespace. */
