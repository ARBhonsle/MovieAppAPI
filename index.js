const express = require("express");
const app = express();
const mongoose = require("mongoose");

const { MONGODB } = require("./config.js");
const port = process.env.port || 4000;

mongoose
  .connect(MONGODB, { useunifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", require("./router/api"));
app.use("/api/user/signup", require("./router/signup"));
//app.use("/api/user/login", require("./router/login"));
app.use("/api/movies", require("./router/movies"));
//app.use("/api/tickets", require("./router/tickets"));
app.use("/api/wallet", require("./router/wallet"));

app.listen(port, function () {
  console.log(`Now listening for requests on ${port}`);
});
