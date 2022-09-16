const movies = require('./movies.json');

/**
 * Function that returns the first ten movies of movies.json
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Function that returns an array of movies that contains the genre passed by parameter
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