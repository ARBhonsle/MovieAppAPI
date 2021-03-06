var express = require("express");
var router = express.Router();
const ticket = require("../models/ticketBooking");

router.get("/:id", function (req, res) {
  var currTicket = ticket.filter(function (movie) {
    if (movie.id == req.params.id) {
      return true;
    }
  });

  if (currMovie.length == 1) {
    res.json(currMovie[0]);
  } else {
    res.status(404); //Set status to 404 as movie was not found
    res.json({ message: "Not Found" });
  }
});
router.post("/", function (req, res) {
  //Check if all fields are provided and are valid:
  if (
    !req.body.name ||
    !req.body.year.toString().match(/^[0-9]{4}$/g) ||
    !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var newId = movies[movies.length - 1].id + 1;
    movies.push({
      id: newId,
      name: req.body.name,
      year: req.body.year,
      rating: req.body.rating,
    });
    res.json({ message: "New movie created.", location: "/movies/" + newId });
  }
});

router.put("/:id", function (req, res) {
  if (
    !req.body.name ||
    !req.body.year.toString() ||
    !req.body.rating.toString() ||
    !req.params.id.toString()
  ) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    var updateIndex = movies
      .map(function (movie) {
        return movie.id;
      })
      .indexOf(parseInt(req.params.id));

    if (updateIndex === -1) {
      movies.push({
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      });
      res.json({
        message: "New movie created.",
        location: "/movies/" + req.params.id,
      });
    } else {
      movies[updateIndex] = {
        id: req.params.id,
        name: req.body.name,
        year: req.body.year,
        rating: req.body.rating,
      };
      res.json({
        message: "Movie id " + req.params.id + " updated.",
        location: "/movies/" + req.params.id,
      });
    }
  }
});

router.delete("/:id", function (req, res) {
  var removeIndex = movies
    .map(function (movie) {
      return movie.id;
    })
    .indexOf(req.params.id);

  if (removeIndex === -1) {
    res.json({ message: "Not found" });
  } else {
    movies.splice(removeIndex, 1);
    res.send({ message: "Movie id " + req.params.id + " removed." });
  }
});
module.exports = router;
