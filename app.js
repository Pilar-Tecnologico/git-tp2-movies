const movies = require('./movies.json');

/**
 * Returns the first 10 movies from the json 
 * @returns {Array}
 */
function getFirstTenMovies(){
    //traemos las 10 primeras apariciones en el json
    let Primeras10Peliculas = movies.slice(0,10);
    return Primeras10Peliculas;
}

/**
 * Returns the Movies with a genre passed as argument 
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