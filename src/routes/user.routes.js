import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "coverImage", maxCount: 1 },
  ]), // for multiple files, multer injected.
  registerUser
);
router.route("/login").post(loginUser);

// Secure route for logout
router.route("/logout").post(verifyJWT, logoutUser);

// Secure route for refresh access token
router.route("/refresh-token").post(refreshAccessToken);

export default router;
