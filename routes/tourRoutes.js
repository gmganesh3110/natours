const express = require("express");
const {
  createTour,
  getTour,
  updateTour,
  deleteTour,
  getAllTours
} = require("../controllers/tourController");

const router = express.Router();

router.post("/", createTour);
router.get("/", getAllTours);
router.get("/:id", getTour);
router.patch("/:id", updateTour);
router.delete("/:id", deleteTour);

module.exports = router;
