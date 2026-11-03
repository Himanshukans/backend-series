import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "").trim(); // Get the access token from cookies or Authorization header

    console.log(token);

    if (!token) {
      throw new ApiError(401, "Access token is missing. Please log in.");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select(
      "-password -refreshToken"
    ); // _id is the user id stored in the access token payload in user.model.js

    if (!user) {
      throw new ApiError(401, " User not found. Please log in again.");
    }

    req.user = user;
    next(); // this next is not from mongoose, it is from express, it will call the next middleware in the stack
  } catch (error) {
    throw new ApiError(401, "Invalid access token. Please log in again.");
  }
});
