const movies = require('./movies.json');

/**
 * Get the first ten movies from the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    const firstMovies= movies.slice(0, 10);
    return firstMovies.map( data => data.title);
}

/**
 * Get all the movies indicated by the parameter
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