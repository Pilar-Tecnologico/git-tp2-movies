const movies = require('./movies.json');

/**
 * Bring only the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Get all the movies of the given genre, being able to have more than one genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();