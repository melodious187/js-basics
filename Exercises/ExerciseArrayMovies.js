
const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

// console.log(ratings);

let rate = getRating(movies);

// Get all movies in 2018
// Sort by rating in Descending order
// Show the title

function getRating (movies) {
    let ratedMovies = [];
    for (movie of movies)
        if ((movie.year === 2018) && (movie.rating > 4))  ratedMovies.push(movie.title);
    
    console.log(ratedMovies);

}



