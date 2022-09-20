const movies = require('./movies.json');

/**
 * Get all the data of the first ten movies.
 * @returns {Array}
 */
function getFirstTenMovies(){
    var primerasDiezPeliculas = [];
    for(i=0;i<10;i++){
        //primerasDiezPeliculas.push(i);
        primerasDiezPeliculas.push(movies[i]);
        }
        return primerasDiezPeliculas;

}

/**
 * Get an array of all movies with the specified genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    var peliculasPorGenero = movies.filter(pelicula => pelicula.genre == genre);
    return peliculasPorGenero;
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n`,firstTenMovies);
    console.log(`Only Drama movies:\n`,dramaMovies);
}

main();