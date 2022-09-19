const movies = require("./movies.json");

/**
 * Function for getting the first 10 movies in the movies.json
 * @returns {Array}
 */
function getFirstTenMovies() {
  //complete with your code
  return movies.slice(0, 10);
}

/**
 * Function for getting movies by genre
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
  //complete with your code
}

function main() {
  const firstTenMovies = getFirstTenMovies();
  const dramaMovies = getMoviesWithGenre("Drama");
  console.log(`Only first ten movies:\n${JSON.stringify(firstTenMovies)}\n`);
  console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();
