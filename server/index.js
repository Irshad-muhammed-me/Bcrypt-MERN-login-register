const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const EmployeModel = require("./models/Bcrypt");

const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/Bcrypt");

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  EmployeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        // Use bcrypt.compare to check password
        bcrypt
          .compare(password, user.password)
          .then((isMatch) => {
            if (isMatch) {
              res.json("Success");
            } else {
              res.json("Invalid password");
            }
          })
          .catch((err) => res.json(err));
      } else {
        res.json("No record existed.");
      }
    })
    .catch((err) => res.json(err));
});

// Register route with password hashing
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      EmployeModel.create({ name, email, password: hashedPassword })
        .then((newEmployee) => res.json(newEmployee))
        .catch((err) => res.json(err));
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    });
});

// Start server
app.listen(3001, () => {
  console.log("Server is running on port 3001.");
});
