import express from "express";
import {
    registerUser,
    authenticateUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authenticateUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.put("/update-profile", updateUserProfile);

export default router;
