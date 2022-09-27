const movies = require('./movies.json');

/**
 * this function must bring the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    
}

/**
 * this function must bring movies by genre
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