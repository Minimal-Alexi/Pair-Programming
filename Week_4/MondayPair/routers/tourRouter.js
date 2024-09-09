import auth from '../middleware/auth.js';

const express = require('express');
const router = express.Router();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers.js"); 

// Middleware to parse JSON
router.use(express.json());

// ROUTES

// GET /tours
router.get("/", getAllTours);

router.use(auth);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// POST /tours
router.post("/", createTour);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;