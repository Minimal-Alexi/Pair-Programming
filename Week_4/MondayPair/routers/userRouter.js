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

// GET /tours/:tourId
router.get("/:tourId", getUserById);

// PUT /tours/:tourId
router.put("/:tourId", updateUser);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteUser);

module.exports = router;