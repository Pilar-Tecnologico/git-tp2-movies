const movies = require('./movies.json');

/**
 * This function gets the first ten objects from movies.json and transforms this into a string.
 * @returns {Array}
 */
function getFirstTenMovies(){
    var tmovies =  movies.slice(0,10);
    return JSON.stringify(tmovies);
}

/**
 * This function gets movies for genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    const moviesGenre = movies.filter(a => a.genre == genre);
    return JSON.stringify(moviesGenre);
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();