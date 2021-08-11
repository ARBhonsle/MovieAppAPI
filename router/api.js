const express = require("express");
const router = express.Router();
const User = require("../models/user");

app.post("/user/signup", function (req, res) {
  if (!req.body.id || !req.body.password) {
    res.status("400");
    res.send("Invalid details!");
  } else {
    User.filter((user) => {
      if (user.id === req.body.id) {
        res.render("signup", {
          message: "User Already Exists! Login or choose another user id",
        });
      }
    });
    var newUser = {
      id: req.body.id,
      password: req.body.password,
      image: req.body.image,
      email: req.body.email,
    };
    User.push(newUser);
    req.session.user = newUser;
    res.redirect("/protected_page");
  }
});

router.get("/user", function (req, res, next) {
  User.find({})
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

router.post("/user", function (req, res, next) {
  User.create(req.body)
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

router.put("/user/:id", function (req, res, next) {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then(async (user) => {
    User.findOne({ _id: req.params.id }).then(function (student) {
      res.send(user);
    });
  });
});

router.delete("/user/:id", function (req, res, next) {
  User.findOneAndDelete({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
});

module.exports = router;
