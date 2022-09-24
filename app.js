const movies = require('./movies.json');

/**
 * Get the first 10 movies names in the list
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const moviesArray =[]
    movies.slice(0,10).map(e=> moviesArray.push(e.title))
    console.log(moviesArray)
     return moviesArray
}

/**
 * Get an array of movies given genre
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