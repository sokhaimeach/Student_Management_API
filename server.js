const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL;
const path = require("path");
const studentRoute = require("./routers/student.routes");

// Initialize path
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use("/student", studentRoute);
// connect to mongodb
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Conncet to mongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connect to mongoDB : ", err);
  });
