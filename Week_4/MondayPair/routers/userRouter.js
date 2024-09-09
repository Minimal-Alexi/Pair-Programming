import auth from '../middleware/auth.js';

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

// GET /users
router.get("/", getAllUsers);

router.use(auth);

// GET /users/:userId
router.get("/:userId", getUserById);

// POST /users
router.post("/", createUser);

// PUT /users/:userId
router.put("/:userId", updateUser);

// DELETE /users/:userId
router.delete("/:userId", deleteUser);

module.exports = router;