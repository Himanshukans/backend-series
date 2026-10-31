import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message:
      "user successfully registered, please check your email for verification link",
  });
});

export { registerUser };
