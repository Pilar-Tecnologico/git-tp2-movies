const movies = require('./movies.json');

/**
 * Complete with a brief definition of what this function should do
 * This function returns the ten first movies in the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    const tenMovies = movies.map((tenMovies) => tenMovies.title);
    
    if (tenMovies.length > 10) {
        tenMovies.length = 10;
        return tenMovies;
      } 
};

/**
 * Complete with a brief definition of what this function should do
 * This function returns all the movies classified with the specified genre
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    const movie = movies.filter(movie => movie.genre === genre);
    const moviesByGenre = movie.map((moviesByGenre) => moviesByGenre.title);
    return moviesByGenre;
};


function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();