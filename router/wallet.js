var express = require("express");
var router = express.Router();
const wallet = require("../models/wallet");
const wallets = require("../resolvers/wallet");
const MongoClient = require("mongodb").MongoClient;
const url = require("../config").MONGODB;

router.get("/:id", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("movies_app_api");
    dbo
      .collection("wallets")
      .findOne({ id: req.params.id }, function (err, result) {
        if (err) throw err;
        res.json(result);
        db.close();
      });
  });
  /*
  var currAmount = wallets.filter(function (wallet) {
    if (wallet.id == req.params.id) {
      res.status(200);
      res.json({ wallet });
      return true;
    } else {
      res.status(404);
      res.json({ message: "Not Found" });
    }
  });
  */
});
/*
router.get("/", function (req, res) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("movies_app_api");
    dbo.collection("wallets").find({}, function (err, result) {
      if (err) throw err;
      res.json(result);
      db.close();
    });
  });
});
*/
router.post("/:id", function (req, res) {
  if (!req.params.id) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    /*
    wallets.push({
      id: req.params.id,
      amount: 100,
      //user: res.bo
    });
    */
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;

      var wallet = {
        id: req.params.id,
        amount: 100,
      };
      var dbo = db.db("movies_app_api");
      dbo.collection("wallets").insertOne(
        {
          id: req.params.id,
          amount: 100,
        },
        function (err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
        }
      );
    });
    res.status(200);
    res.json({
      message: "wallet " + req.params.id + " created ",
      amount: 100,
    });
  }
});

router.put("/:id", function (req, res) {
  if (!req.params.id) {
    res.status(400);
    res.json({ message: "Bad Request" });
  } else {
    //console.log(req.body.addAmount);
    var index = wallets
      .map(function (wallet) {
        return wallet.id;
      })
      .indexOf(parseInt(req.params.id));
    var amount = wallets.map(function (wallet) {
      return wallet.amount;
    });
    wallets[index] = {
      id: req.params.id,
      //amount: amount + req.body.amount,
    };
    res.json({
      message: "Wallet" + req.params.id + " updated",
      amount: amount,
      wallet: wallets[index],
    });
  }
});

module.exports = router;
