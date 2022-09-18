const movies = require('./movies.json');

/**
 * Get the first ten movies from list
 * @returns {Array}
 */
function getFirstTenMovies(){
    
    //complete with your code

    let moviesCopia = movies.slice()
    moviesCopia.length = 10
    return moviesCopia

}

/**
 * Find the movies with the genre indicated
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    let moviesResults= movies.filter(results => results.genre = genre)
    return moviesResults
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies`, firstTenMovies);
    console.log(`Only Drama movies`, dramaMovies);
}

main();