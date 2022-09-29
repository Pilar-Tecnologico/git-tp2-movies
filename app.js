const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * @returns {Array}
 * retrive first ten movies from movies.json
 */
function getFirstTenMovies(){
    let firstTenMovies = new Array;
    return firstTenMovies = movies.slice(0,10); 

}

/**
 * Complete with a brief definition of what this function should do
 * @param  {String} genre
 * @returns {Array}
 * retrieve the movies with genre send for params the genre
 */
 function getMoviesWithGenre(genre){
    var genreFind = [];
    movies.forEach(movie => {
        if (movie.genre.includes(genre)) {
            genreFind.push(movie); 
        }
    });
    return genreFind;
    
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Sci-Fi');
    console.log(`Only first ten movies`, firstTenMovies);
    //console.log(`Only Sci-Fi movies:`,dramaMovies);

}

main();