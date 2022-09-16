const movies = require('./movies.json');

/**
 * Function that returns the first ten movies of movies.json
 * @returns {Array}
 */
function getFirstTenMovies(){
    const slicedMovies= movies.slice(0,10);
    let movieTitles=[]
    for (const movie of slicedMovies) {
        movieTitles.push(movie.title)
        
    }
    return movieTitles;

}

/**
 * Function that returns an array of movies that contains the genre passed by parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();