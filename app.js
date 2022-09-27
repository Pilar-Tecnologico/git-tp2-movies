const movies = require('./movies.json');

/**
Returns the first 10 movies of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
    Select movies by their genre.
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