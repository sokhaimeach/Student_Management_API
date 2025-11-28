const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  contact: {
    phone_number: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    address: {
      street: {
        type: String,
        default: null,
      },
      city: {
        type: String,
        default: null,
      },
    },
  },
});

module.exports = mongoose.model("students", studentSchema);
