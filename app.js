const movies = require('./movies.json');

/**
 * Get the first ten movies and return an array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Get the movies when the genre is drama and return an array
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