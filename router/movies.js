var express = require("express");
var router = express.Router();
const movies = require("../models/movie");
const MongoClient = require("mongodb").MongoClient;
const url = require("../config").MONGODB;
const { body } = require("express-validator/check");
const { sanitizeBody } = require("express-validator/filter");
const collection = "movies_app_api";
const dbname = "wallet";

router.get("/:id", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("movies_app_api");
    dbo
      .collection("movies")
      .findOne({ id: req.params.id }, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });
});
router.get("/:name", (req, res) => {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("movies");
    dbo.collection("movies_app_api").findOne(
      {
        name: req.params.name,
      },
      function (err, result) {
        if (err) throw err;
        res.status(200);
        res.json(result);
        db.close();
      }
    );
  });

  if (currMovie.length == 1) {
    res.json(currMovie[0]);
  } else {
    res.status(404); //Set status to 404 as movie was not found
    res.json({ message: "Not Found" });
  }
});
router.post("/", function (req, res) {
  if (!req.body.name || !req.body.type || !req.body.tickets || !req.body.id) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("movies_app_api");
      dbo.collection("movies").insertOne(
        {
          id: req.body.id,
          name: req.body.name,
          type: req.body.year,
          tickets: req.body.tickets,
        },
        function (err, result) {
          if (err) throw err;
          res.status(200);
          res.json(result.ops);
          db.close();
        }
      );
    });
  }
});

/*
router.put("/:id", function (req, res) {
  if (!req.body.id || !req.body.tickets) {
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
        type: req.body.type,
        tickets: req.body.tickets,
      });
      res.status(200);
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
      res.status(200);
      res.json({
        message: "Movie id " + req.params.id + " updated.",
        location: "/movies/" + req.params.id,
      });
    }
  }
});
*/

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
