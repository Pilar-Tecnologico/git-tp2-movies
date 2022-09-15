const movies = require("./movies.json");

/**
 * Extracts the first 10 movies from the movies.json
 * @returns {Array}
 */
function getFirstTenMovies() {
  const first10Movies = movies.slice(0, 10);
  return first10Movies.map(
    (movie, index) =>
      `\n movie ${index + 1}: ${movie.imdb_title_id} ${movie.title} ${
        movie.genre
      }`
  );
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
