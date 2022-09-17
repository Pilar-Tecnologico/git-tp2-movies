const movies = require('./movies.json');

/**
 * Get the first ten movies from list
 * @returns {Array}
 */
function getFirstTenMovies(){
    
    //complete with your code
}

/**
 * Find the movies with the genre indicated
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