const student = require("../models/student");

const getStudent = async (req, res) => {
  try {
    const students = await student.find();
    if (!students) {
      return res.status(404).json({ message: "Student not found!" });
    }
    return res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "error get student : " + err });
  }
};

const createStudent = async (req, res) => {
  try {
    const reqStudent = await student.create(req.body);
    if (!reqStudent) {
      return res.status(400).json({ message: "Invalid student data!" });
    }
    return res.status(201).json(reqStudent);
  } catch (err) {
    res.status(500).json({ message: "error create student : " + err });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentUpdate = await student.findByIdAndUpdate(id, req.body);
    if (!studentUpdate) {
      return res.status(404).json({ message: "Student not found!" });
    }
    const students = await student.findById(id);
    return res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "error update student : " + err });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentDelete = await student.findByIdAndDelete(id);
    if (!studentDelete) {
      return res.status(404).json({ message: "Student not found!" });
    }
    return res.status(200).json({ message: "Student deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: "error delete student : " + err });
  }
};

module.exports = { getStudent, createStudent, updateStudent, deleteStudent };
