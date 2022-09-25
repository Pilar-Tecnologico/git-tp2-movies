const movies = require('./movies.json');

/**
 * Returns the first 10 movies from the json 
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Returns the Movies with a genre passed as argument
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