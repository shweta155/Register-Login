const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
const UserModel = require("./models/UserModel.js");

mongoose
  .connect("mongodb://localhost:27017/Register")
  .then((result) => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

//   home route

app.get("/", (req, res) => {
  res.send("home page");
});

// login route

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("passsword is invalid");
      }
    } else {
      res.json("user not registered");
    }
  });
});

// register route

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log(`server is running 3000`);
});
