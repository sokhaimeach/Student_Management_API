const express = require("express");
const {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");
const router = express.Router();

router.route("/").get(getStudent).post(createStudent);

router.route("/:id").put(updateStudent).delete(deleteStudent);

module.exports = router;
