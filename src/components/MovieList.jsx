import  movies  from '../api/movies.json'
import MovieCard from './MovieCard'

function MovieList( { watchlist, setWatchlist } ) {
   
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} watchlist={watchlist} setWatchlist={setWatchlist}/>  
            ))}
        </div>
    )
}

export default MovieList