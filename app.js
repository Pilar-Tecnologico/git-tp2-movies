const movies = require('./movies.json');

/**
 * Get the first ten movies (elements) from the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    let movies10 = new Array();
    for (let i = 0; i < 10; i++) {
        movies10.push(movies[i].title);
    }
    return movies10;
}

/**
 * Get all the movies with the genre assigned on the parameter
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