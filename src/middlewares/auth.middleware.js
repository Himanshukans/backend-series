import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

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
    //   next();  // We do not need to call next() explicitly because we are using asyncHandler which automatically handles the next() call for us. If we do not call it, asyncHandler will automatically call it for us after the async function is executed.
  } catch (error) {
    throw new ApiError(401, "Invalid access token. Please log in again.");
  }
});
