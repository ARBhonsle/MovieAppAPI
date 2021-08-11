const Movie = require("../models/movie");
const movie = await Movie.findOne({ name });
const showAllMovie = async ({ movie }) => {
  const list = movie().map((val) => {
    return val;
  });
  return list;
};
const showMovieByName = async ({ movie }) => {
  const list = movie.map((val) => val.name);
  return list;
};
const showMovieByGenre = async ({ movie }) => {
  const list = movie.map((val) => val.genre);
  return list;
};
const showMovieByType = async ({ movie }) => {
  const list = movie.map((val) => val.type);
  return list;
};
module.exports = {
  showAllMovie,
  showMovieByName,
  showMovieByGenre,
  showMovieByType,
};
