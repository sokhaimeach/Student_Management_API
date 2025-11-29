const express = require("express");
const {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/").get(getStudent);
router.post("/", createStudent);

router.route("/:id").post(deleteStudent);
router.post("/update/:id", updateStudent);

module.exports = router;
