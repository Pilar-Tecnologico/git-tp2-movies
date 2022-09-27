const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * This function will return an Array with ten movies from movies.json
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    
}

/**
 * Complete with a brief definition of what this function should do
 * This function will take one parameter and return an array of all the movies with the same genre
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