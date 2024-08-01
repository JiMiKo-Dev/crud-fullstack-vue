const express = require("express");
const userControllers = require("../controllers/user.controllers");

const router = express.Router();

// สร้าง route API
router.get("/getAllUser", userControllers.getAllUser);
router.get("/getUser/:id", userControllers.getUserById);
router.post("/createUser", userControllers.createUser);
router.put("/editUser/:id", userControllers.updateUser);
router.delete("/deleteUser", userControllers.deleteUser);

module.exports = router;
