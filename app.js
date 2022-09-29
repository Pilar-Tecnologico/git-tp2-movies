const movies = require('./movies.json');

/**
Get the first 10 elements of the array
 * @returns {Array}
 */
function getFirstTenMovies(){
    //complete with your code
    let FirstTenMovies =[]
            movies.forEach(nameMovie => {
                if (FirstTenMovies.length < 10){
                  FirstTenMovies.push(nameMovie.title)
                }
             })
    return FirstTenMovies
}

/**
 * Get all movies containing genre as parameter
 * @param  {String} genre
 * @returns {Array}
 */
 function getMoviesWithGenre(genre){
    //complete with your code
    MoviesWithGenre=[]
                movies.forEach(ElementMovies=> {
                    if(ElementMovies.genre.indexOf(genre) > -1){
                        MoviesWithGenre.push(ElementMovies.title);
                    }
                })
                return MoviesWithGenre
}

function main(){
    const firstTenMovies = getFirstTenMovies();
    const dramaMovies = getMoviesWithGenre('Drama');
    console.log(`Only first ten movies:\n${firstTenMovies}\n`);
    console.log(`Only Drama movies:\n${dramaMovies}\n`);
}

main();