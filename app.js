const movies = require('./movies.json');

/**
 * This function return the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Return an array whith all movies whose genres include the content of the @parm 'genre'
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