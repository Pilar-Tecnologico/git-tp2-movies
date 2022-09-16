const movies = require('./movies.json');

/**
 * First ten movies
 * @returns {Array}
 */
function getFirstTenMovies(){
    let tenNames =[]
 movies.forEach(nameMovie => {
    if (tenNames.length < 10){
        tenNames.push(nameMovie.title)
    }
 })
 return tenNames
}

/**
 * Selected movies in genres
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    let moviesNames = []
    movies.forEach (moviesElement => {
        if (moviesElement.genre.indexOf(genre) > -1){
            moviesNames.push(moviesElement.title);
        }
    })
    return moviesNames
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();