import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// cors use
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// import routes
import userRoutes from "./routes/user.routes.js"; //we can use custom name for import, when we use default export in the file

//routes declaration
app.use("/api/v1/users", userRoutes);

// http://localhost:8000/api/v1/users/register

export { app };
