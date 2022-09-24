const movies = require('./movies.json');

/**

 * Get an array with the first ten movies from a JSON archive.
 * @returns {Array}
 */
function getFirstTenMovies(){
  const firstTenMovies =  movies.slice(0, 10);
  return firstTenMovies
}

/**
 * Get an array of movies filtered by genre passed as a parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    const genSplit = movies.filter(gen => gen.genre.includes(genre));
    return genSplit
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies`, firstTenMovies);
    console.log(`Only Drama movies`, dramaMovies);
}

main();