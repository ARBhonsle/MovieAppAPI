var express = require("express");
var router = express.Router();
const user = require("../models/user");

router.get("/user", function (req, res, next) {
  User.find({})
    .then(function (user) {
      res.send(user);
    })
    .catch(next);
});

router.put("/user/:id", function (req, res, next) {
  User.findOneAndUpdate({ _id: req.params.id }, req.body).then(async (user) => {
    User.findOne({ _id: req.params.id }).then(function (user) {
      res.send(user);
    });
  });
});

router.delete("/user/:id", function (req, res, next) {
  User.findOneAndDelete({ _id: req.params.id }).then(function (user) {
    res.send(user);
  });
});
