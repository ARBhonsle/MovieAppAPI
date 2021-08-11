const express = require("express");
const router = express.Router();

router.get("/signup", function (req, res) {
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

module.exports = router;
