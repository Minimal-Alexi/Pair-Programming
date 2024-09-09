const express = require('express');
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES

// GET /tours
router.get("/", getAllUsers);

// POST /tours
router.post("/", createUser);

// GET /tours/:userId
router.get("/:userId", getUserById);

// PUT /tours/:userId
router.put("/:userId", updateUser);

// DELETE /tours/:userId
router.delete("/:userId", deleteUser);

module.exports = router;