const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subject_id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  credits: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

module.exports = mongoose.model("subjects", subjectSchema);
