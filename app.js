const movies = require('./movies.json');

/**
 * this function gets the first 10 movies
 * @returns {Array}
 */
 function getFirstTenMovies(){
    const firstTenMovies = movies.slice(0,10);
    return firstTenMovies;
}

/**
 * this function searches the movie according to its genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies ${JSON.stringify(firstTenMovies)}`)
    console.log(`Only first ten movies`, firstTenMovies)
}

main();