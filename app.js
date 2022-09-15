const movies = require("./movies.json");

/**
 * Extracts the first 10 movies from the movies.json
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
}

/**
 * Brings all movies that contain the genre passed through the parameter
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  //complete with your code
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
