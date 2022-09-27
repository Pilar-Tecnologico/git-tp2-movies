const movies = require('./movies.json');

/**
 * The first one should fetch only the first ten elements of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    let diezPeliculas = [];
    let contador = 0;
    for (let movie of movies) {
        if (contador < 10){
        diezPeliculas.push(movie.title)	
        }
    contador++;
    }
    return diezPeliculas;
}

/**
 * bring all the movies that contain the genre passed by parameter (they may have more than one)
 * @param  {String} genre
 * @returns {Array}
 */
function getMoviesWithGenre(genre){
    //complete with your code 
    const moviesDrama = movies.filter(function(movie) {
        return movie.genre === 'Drama';
        })
    console.log(moviesDrama);
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();