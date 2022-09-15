const movies = require('./movies.json');

/**
 * Get the first 10 movies from the movies.json database
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Get movies by genre from the movies.json database
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