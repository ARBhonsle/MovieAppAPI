let movie = require("../models/movie");

const showAllMovie = async () => {
  const list = await movie.find({});
  return list;
};
const showMovieByName = async () => {
  const movieList = await movie.find({ name });
  return movieList;
};
const showMovieByGenre = async () => {
  const list = await movie.find({ genre });
  return list;
};
const showMovieByType = async () => {
  const list = await movie.find({ type });
  return list;
};
module.exports = {
  showAllMovie,
  showMovieByName,
  showMovieByGenre,
  showMovieByType,
};
