const movies = require('./movies.json');

/**
 * This function return the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies() {
    let firstTenMovies = new Array;
    return firstTenMovies = movies.slice(0,10);
}

/**
 * Return an array whith all movies whose genres include the content of the @parm 'genre'
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre) {
    var dramaMovies = [];
    movies.forEach(movie => {
        if (movie.genre.includes(genre)) {
            dramaMovies.push(movie); 
        }
    });
    return dramaMovies;
}

function main() {
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies`, firstTenMovies);
    console.log(`Only Drama movies:`, dramaMovies);
}

main();