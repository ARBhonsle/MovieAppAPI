const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  type: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  tickets: {
    type: Number,
    required: true,
    min: 60,
    max: 255,
  },
});

module.exports = mongoose.model("Movie", movieSchema);
