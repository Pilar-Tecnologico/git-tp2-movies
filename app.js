const movies = require('./movies.json');

/**
 * Get an array with the first 10 movies, including their data
 * @returns {Array}
 */
function getFirstTenMovies(){
    return movies.slice(0,10);
}

/**
 * Get an array of all movies of the specific genre, including their data
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    return movies.filter((ele)=> ele.genre == genre);
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies`, firstTenMovies);
    console.log(`Only Drama movies`, dramaMovies);
}

main();