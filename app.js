const movies = require("./movies.json");

/**
 * Get an array with the first 10 movies.
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
  return movies.splice(0, 10);
}

/**
 * Get all movies of the same genre which is given as parameter.
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  //complete with your code
  return movies.filter((movie) => movie.genre === genre);
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${firstTenMovies}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
