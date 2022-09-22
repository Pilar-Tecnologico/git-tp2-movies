const movies = require('./movies.json');

/**
 * This function return the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    let firstTenMovies = new Array;
    return firstTenMovies = movies.slice(0,10);
}

/**
 * Return an array whith all movies whose genres include the content of the @parm 'genre'
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    let resultado = movies.find(movie => movie.genre === genre);
    return resultado;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies`, firstTenMovies);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();