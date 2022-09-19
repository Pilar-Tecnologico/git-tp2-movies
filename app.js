const movies = require('./movies.json');

/**
 * Get only first ten movies, from movies.json.
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const firsttenMovies = movies.slice(0,10);
    return JSON.stringify(firsttenMovies, null, ' ');
}

/**
 * Get all movies of genre given. They can have more than one genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    const moviesforGenre=movies.filter(gen => gen.genre.includes('Drama'));
    return JSON.stringify(moviesforGenre, null, ' ');
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();