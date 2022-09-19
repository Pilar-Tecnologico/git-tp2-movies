const movies = require('./movies.json');

/**
 * Bring only the first ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    let topTen = []
    movies.forEach( topTenNames => {
        if(topTen.length < 10){
            topTen.push(topTenNames.title)
        }
    })
    return topTen
}

/**
 * Get all the movies of the given genre, being able to have more than one genre.
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    let moviesGenre = movies.filter(res => res.genre == genre)
    return moviesGenre
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:`, firstTenMovies);
    console.log(`Only Drama movies:`,dramaMovies);
}

main();