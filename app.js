const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    let PeliculasPorGenero = movies.filter(pelicula => pelicula.genre == genre);
    return PeliculasPorGenero;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${JSON.stringify(firstTenMovies)}\n`);
    console.log(`Only Drama movies:\n${JSON.stringify(dramaMovies)}\n`);
}

main();