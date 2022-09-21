const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * 
 * Print on screen the first 10 movies of a collection
 * 
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    for(i=0;i<10;i++)
  {console.log(movies[i])}
}

/**
 * Complete with a brief definition of what this function should do
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