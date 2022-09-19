const movies = require('./movies.json');

/**
 * First ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    const first10Movies = movies.slice(0, 10);
    return first10Movies.map(
      (movie, index) =>
        `\n movie ${index + 1}: ${movie.imdb_title_id} ${movie.title} ${
          movie.genre
        }`
    );
}

/**
 * This function get movies with genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies ${JSON.stringify(firstTenMovies)}`);
    console.log(`Only first ten movies`, firstTenMovies);
}

main();
