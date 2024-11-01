import asyncHandler from "express-async-handler";

const registerUser = asyncHandler(async (req, res) => {
    res.json({message: "User Registered"});
});

const authenticateUser = asyncHandler(async (req, res) => {
    res.json({message: "User Authenticated"});
});

const logoutUser = asyncHandler(async (req, res) => {
    res.json({message: "User logged Out"});
});

const getUserProfile = asyncHandler(async (req, res) => {
    res.json({message: "Success"});
});

const updateUserProfile = asyncHandler(async (req, res) => {
    res.json({message: "User Profile Updated"});
});

export {
    registerUser,
    authenticateUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
}
