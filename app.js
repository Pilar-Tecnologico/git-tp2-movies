const movies = require('./movies.json');

/**
 * In this function Get only first ten movies, from movies.json.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Here the function apply for a parameter of character string and return an array with all the movies of this genre
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